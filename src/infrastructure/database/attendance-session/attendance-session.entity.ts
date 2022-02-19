import { AutoMap } from '@automapper/classes';

import { Column, Entity, OneToMany, PrimaryColumn } from 'typeorm';
import { Attendance } from '../attendance/attendance.entity';

@Entity()
export class AttendanceSession {
  @AutoMap()
  @PrimaryColumn()
  id: string;

  @AutoMap()
  @Column()
  name: string;

  @AutoMap()
  @Column({ nullable: true })
  description: string;

  @OneToMany(() => Attendance, (attendance) => attendance.attendanceSession)
  attendances: Attendance[];
}
