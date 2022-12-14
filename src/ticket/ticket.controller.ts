import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { TicketService } from './ticket.service';
import { CreateTicketDto } from './dto/create-ticket.dto';
import { UpdateTicketDto } from './dto/update-ticket.dto';
import { Ticket } from './entities/ticket.entity';
import { ApiParam } from '@nestjs/swagger';


@Controller('ticket')
export class TicketController {
  constructor(private readonly ticketService: TicketService) { }

  @Post()
  create(@Body() createTicketDto: CreateTicketDto) {
    return this.ticketService.create(createTicketDto);
  }

  @Get()
  findAll() {
    return this.ticketService.findAll();
  }

  @Get('/:id')
  @ApiParam({ name: 'id', type: 'string' })
  getSingleTree(@Param() params: { id: string }): Promise<Ticket> {
    return this.ticketService.findOne(params.id);
  }

  // @Get('/status')
  // getStatus(): Promise<Ticket> {
  //   return this.ticketService.findStatus();
  // }

  // @Get('/statusDashboard')
  // getStatusDashboard() {
  //   return this.ticketService.findStatusDashboard();
  // }

  @Get('/status/:findStatus')
  @ApiParam({ name: 'findStatus', type: 'string' })
  getOneStatus(@Param() params: { findStatus: string }): Promise<Ticket> {
    return this.ticketService.findOneStatus(params.findStatus);
  }



  // @Patch(':id')
  // update(@Param('id') id: string, @Body() updateTicketDto: UpdateTicketDto) {
  //   return this.ticketService.update(+id, updateTicketDto);
  // }

  // @Delete(':id')
  // @ApiParam({ name: 'id', type: 'string' })
  // remove(@Param('id') id: string) {
  //   return this.ticketService.remove(+id);
  // }

}
