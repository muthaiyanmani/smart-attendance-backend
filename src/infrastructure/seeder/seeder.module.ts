import { Module } from '@nestjs/common';
import { DatabaseModule } from '../database/database.module';
import { Seeder } from './seeder';

/* PLOP_INJECT_IMPORT */
import { MetaDataSeederModule } from "./meta-data/meta-data-seeder.module";
import { LanguageSeederModule } from "./language/language-seeder.module";
import { AttendanceSessionSeederModule } from "./attendance-session/attendance-session-seeder.module";
import { SectionSeederModule } from "./section/section-seeder.module";
import { AttendanceStatusSeederModule } from "./attendance-status/attendance-status-seeder.module";

@Module({
  imports: [
    DatabaseModule,
    /* PLOP_INJECT_MODULE */
MetaDataSeederModule,
LanguageSeederModule,
AttendanceSessionSeederModule,
SectionSeederModule,
AttendanceStatusSeederModule,
  ],
  controllers: [],
  providers: [Seeder]
})
export class SeederModule {}
