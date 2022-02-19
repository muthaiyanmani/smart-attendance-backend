import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { AttendanceSession } from "@infrastructure/database/attendance-session/attendance-session.entity";
import { AttendanceSessionSeederService } from "./attendance-session-seeder.service";

@Module({
  imports: [TypeOrmModule.forFeature([AttendanceSession])],
  controllers: [],
  providers: [AttendanceSessionSeederService],
  exports:[AttendanceSessionSeederService]
})
export class AttendanceSessionSeederModule {}
