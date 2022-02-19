import { AutoMap } from '@automapper/classes';
import { ApiProperty } from '@nestjs/swagger';

export class AttendanceSessionBase {
  @AutoMap()
  @ApiProperty()
  name: string;
}
