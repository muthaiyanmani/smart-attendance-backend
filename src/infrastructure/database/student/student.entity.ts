import { AutoMap } from '@automapper/classes';
import { AuditColumn } from '../audit-column.entity';
import { Column, Entity, ManyToOne, OneToMany } from 'typeorm';
import { Standard } from '../standard/standard.entity';
import { Section } from '../section/section.entity';
import { Attendance } from '../attendance/attendance.entity';
import { Language } from '../language/language.entity';

@Entity()
export class Student extends AuditColumn {
  public setId(id: string) {
    this.id = id;
  }

  @AutoMap()
  @Column()
  firstName: string;

  @AutoMap()
  @Column()
  lastName: string;

  @AutoMap()
  @Column()
  fatherName: string;

  @AutoMap()
  @Column()
  motherName: string;

  @AutoMap()
  @Column()
  fatherOccupation: string;

  @AutoMap()
  @Column()
  motherOccupation: string;

  @AutoMap()
  @Column()
  annualIncome: string;

  @AutoMap()
  @Column({ nullable: true })
  email: string;

  @AutoMap()
  @Column()
  mobile: string;

  @AutoMap()
  @Column()
  languageId: string;

  @AutoMap()
  @Column()
  dateOfBirth: Date;

  @AutoMap()
  @Column({ type: 'varchar', length: 600 })
  address: string;

  @AutoMap()
  @Column({ nullable: true })
  photoPath: string;

  @AutoMap()
  @Column()
  standardId: string;

  @ManyToOne(() => Standard, (standard) => standard.students)
  standard: Standard;

  @OneToMany(() => Attendance, (attendance) => attendance.student)
  attendances: Attendance[];

  @ManyToOne(() => Language, (language) => language.students)
  language: Language;
}
