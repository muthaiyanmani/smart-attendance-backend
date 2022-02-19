import { AutoMap } from '@automapper/classes';
import { Column, Entity, OneToMany, PrimaryColumn } from 'typeorm';
import { Student } from '../student/student.entity';

@Entity()
export class Language {
  @AutoMap()
  @PrimaryColumn()
  id: string;

  @AutoMap()
  @Column()
  name: string;

  @AutoMap()
  @Column({ nullable: true })
  description: string;

  @OneToMany(() => Student, (student) => student.language)
  students: Student[];
}
