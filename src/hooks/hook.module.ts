import { Module } from '@nestjs/common';
import { HookService } from './hook.service';
import { HookController } from './hook.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Hook } from './entities/hook.entity';

@Module({
  imports:[TypeOrmModule.forFeature([Hook])],
  controllers: [HookController],
  providers: [HookService]
})
export class HookModule {}
