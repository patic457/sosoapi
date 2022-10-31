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


  async findAll(): Promise<Ticket[]> {
    return await this.ticketRepository.find();
  }

  async findStatusDashboard(): Promise<Ticket> {
    const find = await this.ticketRepository.createQueryBuilder('_Ticket')
      .where("_Ticket.status = :status", { status: "triggered" })
      .getOne();
    return find;
  }

  async findOneStatus(findStatus: string): Promise<Ticket> {
    return await this.ticketRepository.findOneBy({ status: findStatus });
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
function InjectConnection() {
  throw new Error('Function not implemented.');
}

