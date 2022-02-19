import { Module } from '@nestjs/common';
import { CommonModule } from '@common/common.module';
import { DatabaseModule } from '@infrastructure/database/database.module';
import { GetAttendanceSessionListMapper } from './get-attendance-session-list/get-attendance-session-list-mapper';
import { GetAttendanceSessionListController } from './get-attendance-session-list/get-attendance-session-list.controller';

@Module({
  imports: [CommonModule, DatabaseModule],
  controllers: [GetAttendanceSessionListController],
  providers: [GetAttendanceSessionListMapper]
})
export class AttendanceSessionUseCasesModule {}
