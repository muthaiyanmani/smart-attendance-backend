import { AutoMap } from '@automapper/classes';
import { AuditColumn } from '../audit-column.entity';
import { Column, Entity, ManyToOne, OneToMany } from 'typeorm';
import { Student } from '../student/student.entity';
import { Attendance } from '../attendance/attendance.entity';
import { Section } from '../section/section.entity';

@Entity()
export class Standard extends AuditColumn {
  public setId(id: string) {
    this.id = id;
  }

  @AutoMap()
  @Column()
  name: string;

  @AutoMap()
  @Column()
  sectionId: string;

  @AutoMap()
  @Column({ nullable: true })
  advisor: string;

  @AutoMap()
  @Column()
  academicYear: string;

  @AutoMap()
  @Column({ nullable: true })
  description: string;

  @ManyToOne(() => Section, (section) => section.standards)
  section: Section;

  @OneToMany(() => Student, (student) => student.standard)
  students: Student[];

  @OneToMany(() => Attendance, (attendance) => attendance.standard)
  attendances: Attendance[];
}
