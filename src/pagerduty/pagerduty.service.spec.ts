import { Test, TestingModule } from '@nestjs/testing';
import { PagerdutyService } from './pagerduty.service';

describe('PagerdutyService', () => {
  let service: PagerdutyService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PagerdutyService],
    }).compile();

    service = module.get<PagerdutyService>(PagerdutyService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
