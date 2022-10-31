import { Injectable } from '@nestjs/common';
import { CreateTicketDto } from './dto/create-ticket.dto';
import { UpdateTicketDto } from './dto/update-ticket.dto';
import { Ticket } from './entities/ticket.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class TicketService {

  constructor(
    @InjectRepository(Ticket)
    private ticketRepository: Repository<Ticket>,
  ) { }

  create(createTicketDto: CreateTicketDto) {
    return 'This action adds a new ticket';
  }


  findAll(): Promise<Ticket[]> {
    return this.ticketRepository.find();
  }

  findStatus(status: string): Promise<Ticket> {
    return this.ticketRepository.findOneBy({ status });

  }

  findOne(id: string): Promise<Ticket> {
    return this.ticketRepository.findOneBy({ id });
  }

  update(id: string, updateTicketDto: UpdateTicketDto) {
    return `This action updates a #${id} ticket`;
  }

  remove(id: number) {
    return `This action removes a #${id} ticket`;
  }
}
