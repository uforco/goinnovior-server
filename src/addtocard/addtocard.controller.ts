import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { AddtocardService } from './addtocard.service';
import { CreateAddtocardDto } from './dto/create-addtocard.dto';
import { UpdateAddtocardDto } from './dto/update-addtocard.dto';

@Controller('addtocard')
export class AddtocardController {
  constructor(private readonly addtocardService: AddtocardService) {}

  @Post()
  create(@Body() createAddtocardDto: CreateAddtocardDto) {
    return this.addtocardService.create(createAddtocardDto);
  }

  @Get()
  findAll() {
    return this.addtocardService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.addtocardService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateAddtocardDto: UpdateAddtocardDto) {
    return this.addtocardService.update(+id, updateAddtocardDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.addtocardService.remove(+id);
  }
}
