import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { PagerdutyService } from './pagerduty.service';
import { CreatePagerdutyDto } from './dto/create-pagerduty.dto';
import { UpdatePagerdutyDto } from './dto/update-pagerduty.dto';

@Controller('pagerduty')
export class PagerdutyController {
  constructor(private readonly pagerdutyService: PagerdutyService) {}

  @Post()
  create(@Body() createPagerdutyDto: CreatePagerdutyDto) {
    return this.pagerdutyService.create(createPagerdutyDto);
  }

  @Get()
  findAll() {
    return this.pagerdutyService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.pagerdutyService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updatePagerdutyDto: UpdatePagerdutyDto) {
    return this.pagerdutyService.update(+id, updatePagerdutyDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.pagerdutyService.remove(+id);
  }
}
