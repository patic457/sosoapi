import { Module } from '@nestjs/common';
import { BelongService } from './belong.service';
import { BelongController } from './belong.controller';

@Module({
  providers: [BelongService],
  controllers: [BelongController]
})
export class BelongModule {}
