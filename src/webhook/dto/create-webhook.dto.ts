import { ApiProperty } from '@nestjs/swagger';

export class CreateWebhookDto {
    
  @ApiProperty()
  id: number;

  @ApiProperty()
  list: string;

}