import { Injectable } from '@nestjs/common';
import { CreatePagerdutyDto } from './dto/create-pagerduty.dto';
import { UpdatePagerdutyDto } from './dto/update-pagerduty.dto';

@Injectable()
export class PagerdutyService {
  create(createPagerdutyDto: CreatePagerdutyDto) {
    return 'This action adds a new pagerduty';
  }

  findAll() {
    return `This action returns all pagerduty`;
  }

  findOne(id: number) {
    return `This action returns a #${id} pagerduty`;
  }

  update(id: number, updatePagerdutyDto: UpdatePagerdutyDto) {
    return `This action updates a #${id} pagerduty`;
  }

  remove(id: number) {
    return `This action removes a #${id} pagerduty`;
  }
}
