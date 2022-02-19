import { Module } from '@nestjs/common';
import { CommonModule } from '@common/common.module';
import { DatabaseModule } from '@infrastructure/database/database.module';

import { GetAttendanceStatusListMapper } from './get-attendance-status-list/get-attendance-status-list-mapper';
import { GetAttendanceStatusListController } from './get-attendance-status-list/get-attendance-status-list.controller';

@Module({
  imports: [CommonModule, DatabaseModule],
  controllers: [GetAttendanceStatusListController],
  providers: [GetAttendanceStatusListMapper]
})
export class AttendanceStatusUseCasesModule {}
