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
    @User('sub') userId: string,
  ) {
    return this.addtocardService.incrementCart({
      ...createAddtocardDto,
      userId,
    });
  }

  @Post('decrement')
  decrementCart(
    @Body() createAddtocardDto: CreateAddtocardDto,
    @User('sub') userId: string,
  ) {
    return this.addtocardService.decrementCart({
      ...createAddtocardDto,
      userId,
    });
  }

  @Get()
  findAll() {
    // return this.addtocardService.findAll();
  }
}
