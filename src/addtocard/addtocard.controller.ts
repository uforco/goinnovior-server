import { Controller, Get, Post, Body } from '@nestjs/common';
import { AddtocardService } from './addtocard.service';
import { CreateAddtocardDto } from './dto/create-addtocard.dto';
import { User } from 'src/auth/decorators/user.decorator';

@Controller('add-to-card')
export class AddtocardController {
  constructor(private readonly addtocardService: AddtocardService) {}

  @Post('increment')
  incrementCart(
    @Body() createAddtocardDto: CreateAddtocardDto,
    @User('sub') user: any,
  ) {
    return this.addtocardService.incrementCart({
      ...createAddtocardDto,
      userId: user.sub,
    });
  }

  @Post('decrement')
  decrementCart(
    @Body() createAddtocardDto: CreateAddtocardDto,
    @User() user: any,
  ) {
    return this.addtocardService.decrementCart({
      ...createAddtocardDto,
      userId: user.sub,
    });
  }

  @Get()
  async findAll(@User() user: any) {
    await this.addtocardService.getAllQunt(user.sub as string);
  }
}
