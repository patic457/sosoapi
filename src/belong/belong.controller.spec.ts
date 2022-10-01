import { Test, TestingModule } from '@nestjs/testing';
import { BelongController } from './belong.controller';

describe('BelongController', () => {
  let controller: BelongController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [BelongController],
    }).compile();

    controller = module.get<BelongController>(BelongController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
