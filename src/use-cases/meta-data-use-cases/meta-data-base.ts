import { AutoMap } from '@automapper/classes';
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';

export class MetaDataBase {
  @AutoMap()
  @ApiProperty()
  code: string;

  @AutoMap()
  @ApiProperty()
  value: string;

  @AutoMap()
  @ApiProperty()
  name: string;

  @AutoMap()
  @ApiPropertyOptional()
  description: string;
}
