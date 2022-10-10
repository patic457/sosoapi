import { PartialType } from '@nestjs/swagger';
import { CreatePagerdutyDto } from './create-pagerduty.dto';

export class UpdatePagerdutyDto extends PartialType(CreatePagerdutyDto) {}
