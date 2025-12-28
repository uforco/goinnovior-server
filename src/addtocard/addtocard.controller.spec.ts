import { Test, TestingModule } from '@nestjs/testing';
import { AddtocardController } from './addtocard.controller';
import { AddtocardService } from './addtocard.service';

describe('AddtocardController', () => {
  let controller: AddtocardController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AddtocardController],
      providers: [AddtocardService],
    }).compile();

    controller = module.get<AddtocardController>(AddtocardController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
