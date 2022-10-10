import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { WebhooksModule } from './webhooks/webhooks.module';


let dataMy = 'aXU1MW1mMHEzMmZraGZwbC5jYmV0eGtkeWh3c2IudXMtZWFzdC0xLnJkcy5hbWF6b25hd3MuY29t';
let dataPg = "ZWMyLTQ0LTIwNS0xNzctMTYwLmNvbXB1dGUtMS5hbWF6b25hd3MuY29t";

function DeCode(txt) {
  let buff = new Buffer(txt, 'base64');
  let text = buff.toString('ascii');
  return text;
}

@Module({
  imports: [
    ConfigModule.forRoot(),
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: DeCode(dataMy),
      port: 3306,
      username: 'de7p9prkwmh3kquo',
      password: 'j2batag6pvrfimgh',
      database: 'g3uky2wss1pv3jyv',

      // username: 'gggcnwwmjihicn',
      // password: 'ba1c42868e17603c0dc488686c769b7b1b034ae6b5344f009d8594eed87b769c',
      // database: 'd8k7dbo77j4dar',
      entities: [],
      synchronize: false,
    }),
    WebhooksModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
