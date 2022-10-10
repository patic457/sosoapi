import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PagerdutyModule } from './pagerduty/pagerduty.module';


let data = 'aXU1MW1mMHEzMmZraGZwbC5jYmV0eGtkeWh3c2IudXMtZWFzdC0xLnJkcy5hbWF6b25hd3MuY29t';

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
      host: DeCode(data),
      port: 3306,
      username: 'de7p9prkwmh3kquo',
      password: 'j2batag6pvrfimgh',
      database: 'g3uky2wss1pv3jyv',

      // type: 'postgres',
      // host: DeCode("ZWMyLTQ0LTE5NS0xMDAtMjQwLmNvbXB1dGUtMS5hbWF6b25hd3MuY29t"),
      // host: "ec2-44-195-100-240.compute-1.amazonaws.com",
      // port: 5432,
      // username: 'sjentdjbxfqetm',
      // password: 'c072ffa3591264bc04c5c97c2725916ebee96baa706183aa2fa00dcfc5a68af9',
      // database: 'd7o6uqiocphc51:tss',
      entities: [],
      synchronize: true,
    }),
    PagerdutyModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
