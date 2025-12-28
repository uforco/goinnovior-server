import { PartialType } from '@nestjs/swagger';
import { CreateAddtocardDto } from './create-addtocard.dto';

export class UpdateAddtocardDto extends PartialType(CreateAddtocardDto) {}
