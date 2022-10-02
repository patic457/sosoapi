import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateHookDto } from './dto/create-hook.dto';
import { UpdateHookDto } from './dto/update-hook.dto';
import { Hook } from './entities/hook.entity';

@Injectable()
export class HookService {

  constructor(
    @InjectRepository(Hook)
    private hookRepository: Repository<Hook>,
  ) { }

  async create(createHookDto: CreateHookDto) : Promise<Hook> {
    var hook = new Hook();
    hook.list = createHookDto.list;
    return await this.hookRepository.save(hook);
  }

  findAll() {
    return `This action returns all hook`;
  }

  findOne(id: number) {
    return `This action returns a #${id} hook`;
  }

  update(id: number, updateHookDto: UpdateHookDto) {
    return `This action updates a #${id} hook`;
  }

  remove(id: number) {
    return `This action removes a #${id} hook`;
  }
}
