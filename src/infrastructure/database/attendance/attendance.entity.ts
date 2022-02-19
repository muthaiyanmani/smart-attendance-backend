import { AutoMap } from '@automapper/classes';
import { AuditColumn } from '../audit-column.entity';
import { Column, Entity, ManyToOne } from 'typeorm';
import { Student } from '../student/student.entity';
import { Standard } from '../standard/standard.entity';
import { Section } from '../section/section.entity';
import { AttendanceStatus } from '../attendance-status/attendance-status.entity';
import { AttendanceSession } from '../attendance-session/attendance-session.entity';

@Entity()
export class Attendance extends AuditColumn {
  public setId(id: string) {
    this.id = id;
  }

  @AutoMap()
  @Column()
  studentId: string;

  @AutoMap()
  @Column()
  standardId: string;

  @AutoMap()
  @Column()
  sectionId: string;

  @AutoMap()
  @Column()
  attendanceDate: Date;

  @AutoMap()
  @Column()
  attendanceStatusId: string;

  @AutoMap()
  @Column()
  attendanceSessionId: string;

  @ManyToOne(() => Student, (student) => student.attendances)
  student: Student;

  @ManyToOne(() => Standard, (standard) => standard.attendances)
  standard: Standard;

  @ManyToOne(() => Section, (section) => section.attendances)
  section: Section;

  @ManyToOne(() => AttendanceStatus, (status) => status.attendances)
  attendanceStatus: AttendanceStatus;

  @ManyToOne(() => AttendanceSession, (session) => session.attendances)
  attendanceSession: AttendanceSession;
}
