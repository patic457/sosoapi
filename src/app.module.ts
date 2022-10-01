import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { WebhookModule } from './webhook/webhook.module';
import { BelongModule } from './belong/belong.module';




@Module({
  imports: [
    WebhookModule,
    ConfigModule.forRoot(),
    BelongModule,

  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
