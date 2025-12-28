import { Injectable } from '@nestjs/common';
import { UpdateAndCreateAddtocardDto } from './dto/create-addtocard.dto';
import { PrismaService } from 'src/config/database/prisma.service';

@Injectable()
export class AddtocardService {
  constructor(private readonly prisma: PrismaService) {}

  async findAll(userId: string) {
    return await this.prisma.addtoCart.findMany({
      where: {
        userId,
      },
      select: {
        id: true,
        quantity: true,
        productId: true,
      },
    });
  }

  async incrementCart(data: UpdateAndCreateAddtocardDto) {
    return this.updateCart({ ...data, quantity: data.quantity });
  }

  async decrementCart(data: UpdateAndCreateAddtocardDto) {
    return this.updateCart({ ...data, quantity: -data.quantity });
  }

  async updateCart(data: UpdateAndCreateAddtocardDto) {
    const { userId, productId, quantity } = data;
    // Try to find existing cart item
    const existingItem = await this.prisma.addtoCart.findUnique({
      where: {
        userId_productId: {
          userId,
          productId,
        },
      },
    });

    const select = {
      id: true,
      productId: true,
      quantity: true,
    };

    if (!existingItem) {
      // If item doesn't exist and change is positive, create it
      if (quantity > 0) {
        return this.prisma.addtoCart.create({
          data: {
            userId,
            productId,
            quantity: quantity,
          },
          select,
        });
      }
      // If change is negative but item doesn't exist, do nothing
      return null;
    }

    const newQuantity = existingItem.quantity + quantity;

    if (newQuantity <= 0) {
      // Delete if quantity is 0 or less
      return this.prisma.addtoCart.delete({
        where: {
          id: existingItem.id,
        },
        select,
      });
    }

    // Otherwise, update quantity
    return this.prisma.addtoCart.update({
      where: {
        id: existingItem.id,
      },
      data: {
        quantity: newQuantity,
      },
    });
  }
}
