import { AutoMap } from '@automapper/classes';
import { AttendanceStatusBase } from './attendance-status-base';

export class GetAttendanceStatusBase extends AttendanceStatusBase {
  @AutoMap()
  id: string;
}
