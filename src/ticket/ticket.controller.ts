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

  @Get('/status/:status')
  @ApiParam({ name: 'status', type: 'string' })
  findStatus(params: { status: string }): Promise<Ticket> {
    return this.ticketService.findStatus(params.status);
  }

  @Get('/:id')
  @ApiParam({ name: 'id', type: 'string' })
  getSingleTree(@Param() params: { id: string }): Promise<Ticket> {
    return this.ticketService.findOne(params.id);
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
