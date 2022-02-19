import { AutoMap } from '@automapper/classes';
import { Column, Entity, PrimaryColumn } from 'typeorm';

@Entity()
export class MetaData {
  @AutoMap()
  @PrimaryColumn()
  id: string;

  @AutoMap()
  @Column()
  code: string;

  @AutoMap()
  @Column()
  value: string;

  @AutoMap()
  @Column()
  name: string;

  @AutoMap()
  @Column({ nullable: true })
  description: string;
}
