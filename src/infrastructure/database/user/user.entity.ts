import { AutoMap } from '@automapper/classes';
import { AuditColumn } from '../audit-column.entity';
import { BeforeInsert, BeforeUpdate, Column, Entity } from 'typeorm';
import * as bcrypt from "bcrypt";

@Entity()
export class User extends AuditColumn {
    
  public setId(id: string) {
    this.id = id;
  }

  @Column()
  @AutoMap()
  name!: string;

  @Column()
  @AutoMap()
  username!: string;

  @Column({ nullable: true })
  @AutoMap()
  email!: string;

  @Column({ nullable: true })
  @AutoMap()
  mobileNumber!: string;

  @Column({ length: 60, nullable: true })
  @AutoMap()
  password!: string;

  @Column()
  @AutoMap()
  isVerified!: boolean;

  @BeforeInsert()
  async hashPasswordInsert() {
    if (this.password) this.password = await bcrypt.hash(this.password, 10);
  }

  @BeforeUpdate()
  async hashPasswordUpdate() {
    if (this.password) this.password = await bcrypt.hash(this.password, 10);
  }

  async comparePassword(attempt: string): Promise<boolean> {
    return await bcrypt.compare(attempt, this.password);
  }
}
