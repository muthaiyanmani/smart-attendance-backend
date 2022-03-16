/* PLOP_INJECT_IMPORT */
import { User } from './user/user.entity';
import { MetaData } from './meta-data/meta-data.entity';
import { Language } from './language/language.entity';
import { Attendance } from './attendance/attendance.entity';
import { AttendanceSession } from './attendance-session/attendance-session.entity';
import { Student } from './student/student.entity';
import { AttendanceStatus } from './attendance-status/attendance-status.entity';
import { Section } from './section/section.entity';
import { Standard } from './standard/standard.entity';

export default [
  /* PLOP_INJECT_ENTITY */
User,
MetaData,
Language,
Attendance,
AttendanceSession,
Student,
AttendanceStatus,
Section,
Standard,
];
