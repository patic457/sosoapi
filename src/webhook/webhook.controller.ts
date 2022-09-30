import { Controller, Get, Post, Body, Patch, Param, Delete, Version } from '@nestjs/common';
import { WebhookService } from './webhook.service';
import { CreateWebhookDto } from './dto/create-webhook.dto';
import { UpdateWebhookDto } from './dto/update-webhook.dto';
import { json } from 'stream/consumers';

@Controller({
  path: 'webhook',
  version: '1'
})
export class WebhookController {
  constructor(private readonly webhookService: WebhookService) { }

  // @Post()
  // create(@Body() createWebhookDto: CreateWebhookDto) {
  // return this.webhookService.create(createWebhookDto);
  // }

  @Post() create(@Body() createWebhookDto: CreateWebhookDto) {
    return JSON.parse(JSON.stringify(createWebhookDto));
  }

  @Get()
  findAll() {
    return this.webhookService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.webhookService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateWebhookDto: UpdateWebhookDto) {
    return this.webhookService.update(+id, updateWebhookDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.webhookService.remove(+id);
  }
}
