import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { WebhookModule } from './webhook/webhook.module';
import { BelongModule } from './belong/belong.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Webhook } from './webhook/entities/webhook.entity';
import { HookModule } from './hooks/hook.module';
import { Hook } from './hooks/entities/hook.entity';


let data = 'aXU1MW1mMHEzMmZraGZwbC5jYmV0eGtkeWh3c2IudXMtZWFzdC0xLnJkcy5hbWF6b25hd3MuY29t';

function DeCode(txt) {
  let buff = new Buffer(txt, 'base64');
  let text = buff.toString('ascii');
  return text;
}

@Module({
  imports: [
    WebhookModule,
    HookModule,
    ConfigModule.forRoot(),
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: DeCode(data),
      port: 3306,
      username: 'de7p9prkwmh3kquo',
      password: 'j2batag6pvrfimgh',
      database: 'g3uky2wss1pv3jyv',
      entities: [Hook],
      synchronize: false,
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
