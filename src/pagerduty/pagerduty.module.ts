import { Module } from '@nestjs/common';
import { PagerdutyService } from './pagerduty.service';
import { PagerdutyController } from './pagerduty.controller';

@Module({
  controllers: [PagerdutyController],
  providers: [PagerdutyService]
})
export class PagerdutyModule {}
