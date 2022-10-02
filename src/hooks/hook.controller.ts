import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { HookService } from './hook.service';
import { CreateHookDto } from './dto/create-hook.dto';
import { UpdateHookDto } from './dto/update-hook.dto';

@Controller({
  path: 'hook',
  version: '1'
})
export class HookController {
  constructor(private readonly hookService: HookService) { }

  @Post()
  async create(@Body() createHookDto: CreateHookDto) {
    // return this.hookService.create(createHookDto);
    // JSON.parse(JSON.stringify(createHookDto));

    const hook = await this.hookService.create(createHookDto);
    return {
      id: hook.id,
      list: hook.event
    }
  }

  @Get()
  findAll() {
    return this.hookService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.hookService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateHookDto: UpdateHookDto) {
    return this.hookService.update(+id, updateHookDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.hookService.remove(+id);
  }
}
