import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateWebhookDto } from './dto/create-webhook.dto';
import { UpdateWebhookDto } from './dto/update-webhook.dto';
import { Webhook } from './entities/webhook.entity';

@Injectable()
export class WebhookService {
  // constructor(
  //   @InjectRepository(Webhook)
  //   private webhookReposity: Repository<Webhook>,
  // ) { }

  async create(createWebhookDto: CreateWebhookDto) {
    const hook = new Webhook();
    // JSON.parse(JSON.stringify(createWebhookDto));
    // hook.id = 2;
    hook.list = "Hi";
    // hook.list = '{"txt":"Hi"}';
    // return await this.webhookReposity.save(hook);
  }

  findAll() {
    return `This action returns all webhook`;
  }

  findOne(id: number) {
    return `This action returns a #${id} webhook`;
  }

  update(id: number, updateWebhookDto: UpdateWebhookDto) {
    return `This action updates a #${id} webhook`;
  }

  remove(id: number) {
    return `This action removes a #${id} webhook`;
  }
}
