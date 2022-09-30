import { ApiProperty } from '@nestjs/swagger';

export class CreateWebhookDto {
    
  @ApiProperty()
  name: string;

  @ApiProperty()
  age: number;

  @ApiProperty()
  breed: string;
}