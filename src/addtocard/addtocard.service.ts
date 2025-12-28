import { Injectable } from '@nestjs/common';
import { CreateAddtocardDto } from './dto/create-addtocard.dto';
import { UpdateAddtocardDto } from './dto/update-addtocard.dto';
import { PrismaService } from 'src/config/database/prisma.service';

@Injectable()
export class AddtocardService {
  constructor(private readonly prisma: PrismaService) {}

  create(createAddtocardDto: CreateAddtocardDto) {
    return 'This action adds a new addtocard';
  }

  findAll() {
    return `This action returns all addtocard`;
  }

  findOne(id: number) {
    return `This action returns a #${id} addtocard`;
  }

  update(id: number, updateAddtocardDto: UpdateAddtocardDto) {
    return `This action updates a #${id} addtocard`;
  }

  remove(id: number) {
    return `This action removes a #${id} addtocard`;
  }
}
