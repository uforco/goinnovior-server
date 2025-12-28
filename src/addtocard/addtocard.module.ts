import { Module } from '@nestjs/common';
import { AddtocardService } from './addtocard.service';
import { AddtocardController } from './addtocard.controller';

@Module({
  controllers: [AddtocardController],
  providers: [AddtocardService],
})
export class AddtocardModule {}
