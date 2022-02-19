import { AutoMap } from '@automapper/classes';
import { Column, Entity, OneToMany, PrimaryColumn } from 'typeorm';
import { Attendance } from '../attendance/attendance.entity';
import { Standard } from '../standard/standard.entity';
import { Student } from '../student/student.entity';

@Entity()
export class Section {
  @AutoMap()
  @PrimaryColumn()
  id: string;

  @AutoMap()
  @Column()
  name: string;

  @AutoMap()
  @Column({ nullable: true })
  description: string;

  @OneToMany(() => Standard, (standard) => standard.section)
  standards: Standard[];

  @OneToMany(() => Attendance, (attendance) => attendance.section)
  attendances: Attendance[];
}
