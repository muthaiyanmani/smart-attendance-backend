import { Module } from '@nestjs/common';
import { CommonModule } from '@common/common.module';
import { DatabaseModule } from '@infrastructure/database/database.module';
/* PLOP_INJECT_IMPORT */
import { MetaDataUseCasesModule } from './meta-data-use-cases/meta-data-use-cases.module';
import { StudentUseCasesModule } from './student-use-cases/student-use-cases.module';
import { StandardUseCasesModule } from './standard-use-cases/standard-use-cases.module';
import { SectionUseCasesModule } from './section-use-cases/section-use-cases.module';
import { LanguageUseCasesModule } from './language-use-cases/language-use-cases.module';
import { AttendanceStatusUseCasesModule } from './attendance-status-use-cases/attendance-status-use-cases.module';
import { AttendanceSessionUseCasesModule } from './attendance-session-use-cases/attendance-session-use-cases.module';

@Module({
  imports: [
    CommonModule,
    DatabaseModule,
    /* PLOP_INJECT_MODULE */
		MetaDataUseCasesModule,
		StudentUseCasesModule,
		StandardUseCasesModule,
		SectionUseCasesModule,
		LanguageUseCasesModule,
		AttendanceStatusUseCasesModule,
    AttendanceSessionUseCasesModule
  ],
  controllers: [],
  providers: []
})
export class UseCasesModule {}
