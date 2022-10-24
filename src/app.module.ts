import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TicketModule } from './ticket/ticket.module';
import { Ticket } from './ticket/entities/ticket.entity';


let dataMy = 'aXU1MW1mMHEzMmZraGZwbC5jYmV0eGtkeWh3c2IudXMtZWFzdC0xLnJkcy5hbWF6b25hd3MuY29t';

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
      entities: [Ticket],
      synchronize: false,
    }),
    TicketModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
