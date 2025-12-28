import { Test, TestingModule } from '@nestjs/testing';
import { AddtocardService } from './addtocard.service';

describe('AddtocardService', () => {
  let service: AddtocardService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AddtocardService],
    }).compile();

    service = module.get<AddtocardService>(AddtocardService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
