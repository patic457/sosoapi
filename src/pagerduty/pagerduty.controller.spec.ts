import { Test, TestingModule } from '@nestjs/testing';
import { PagerdutyController } from './pagerduty.controller';
import { PagerdutyService } from './pagerduty.service';

describe('PagerdutyController', () => {
  let controller: PagerdutyController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PagerdutyController],
      providers: [PagerdutyService],
    }).compile();

    controller = module.get<PagerdutyController>(PagerdutyController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
