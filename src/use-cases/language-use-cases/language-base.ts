import { AutoMap } from '@automapper/classes';
import { ApiProperty } from '@nestjs/swagger';

export class LanguageBase {
  @AutoMap()
  @ApiProperty()
  name: string;
}
