import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { AttendanceStatus } from "@infrastructure/database/attendance-status/attendance-status.entity";
import { AttendanceStatusSeederService } from "./attendance-status-seeder.service";

@Module({
  imports: [TypeOrmModule.forFeature([AttendanceStatus])],
  controllers: [],
  providers: [AttendanceStatusSeederService],
  exports:[AttendanceStatusSeederService]
})
export class AttendanceStatusSeederModule {}
