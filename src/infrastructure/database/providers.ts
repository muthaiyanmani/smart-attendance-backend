/* PLOP_INJECT_IMPORT */
import { UserService } from './user/user.service';
import { MetaDataService } from './meta-data/meta-data.service';
import { LanguageService } from './language/language.service';
import { AttendanceService } from './attendance/attendance.service';
import { AttendanceSessionService } from './attendance-session/attendance-session.service';
import { StudentService } from './student/student.service';
import { AttendanceStatusService } from './attendance-status/attendance-status.service';
import { SectionService } from './section/section.service';
import { StandardService } from './standard/standard.service';

export default [
  /* PLOP_EXPORT_MODULE */
  {
    provide: 'IUserService',
    useClass: UserService
  },
  {
    provide: 'IMetaDataService',
    useClass: MetaDataService
  },
  {
    provide: 'ILanguageService',
    useClass: LanguageService
  },
  {
    provide: 'IAttendanceService',
    useClass: AttendanceService
  },
  {
    provide: 'IAttendanceSessionService',
    useClass: AttendanceSessionService
  },
  {
    provide: 'IStudentService',
    useClass: StudentService
  },
  {
    provide: 'IAttendanceStatusService',
    useClass: AttendanceStatusService
  },
  {
    provide: 'ISectionService',
    useClass: SectionService
  },
  {
    provide: 'IStandardService',
    useClass: StandardService
  }
];
