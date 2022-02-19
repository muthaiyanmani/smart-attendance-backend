import { AutoMap } from '@automapper/classes';
import { ApiProperty } from '@nestjs/swagger';

export class AttendanceStatusBase {
  @AutoMap()
  @ApiProperty()
  name: string;
}
