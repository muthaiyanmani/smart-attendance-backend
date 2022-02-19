import { AutoMap } from "@automapper/classes";
import { Column, PrimaryGeneratedColumn } from "typeorm";

export class AuditColumnWithoutTenant {
    @AutoMap()
    @PrimaryGeneratedColumn('uuid')
    id!: string;
  
    @Column()
    createdBy!: string;
  
    @Column()
    updatedBy!: string;
  
    @Column()
    createdOn!: Date;
  
    @Column()
    updatedOn!: Date;
  }