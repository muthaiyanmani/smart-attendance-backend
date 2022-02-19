import { Injectable } from '@nestjs/common';
import { getConnection } from 'typeorm';
/* PLOP_INJECT_IMPORT */
import { MetaDataSeederService } from "./meta-data/meta-data-seeder.service";
import { LanguageSeederService } from "./language/language-seeder.service";
import { AttendanceSessionSeederService } from "./attendance-session/attendance-session-seeder.service";
import { SectionSeederService } from "./section/section-seeder.service";
import { AttendanceStatusSeederService } from "./attendance-status/attendance-status-seeder.service";
@Injectable()
export class Seeder {
  constructor(
    /* PLOP_INJECT_SERVICE */
private readonly metaDataSeederService: MetaDataSeederService,
private readonly languageSeederService: LanguageSeederService,
private readonly attendanceSessionSeederService: AttendanceSessionSeederService,
private readonly sectionSeederService: SectionSeederService,
private readonly attendanceStatusSeederService: AttendanceStatusSeederService,
  ) {}

  async clean() {
    const queryRunner = getConnection().createQueryRunner();
    await queryRunner.clearDatabase();
  }

  async seed() {
    await this.seedInitial();
  }

  async seedInitial() {
    /* PLOP_CALL_METHOD */
const META_DATUM = await this.metaData();
const LANGUAGES = await this.language();
const ATTENDANCE_SESSIONS = await this.attendanceSession();
const SECTIONS = await this.section();
const ATTENDANCE_STATUSES = await this.attendanceStatus();
    return {
      /* PLOP_RETURN_METHOD */
META_DATUM,
LANGUAGES,
ATTENDANCE_SESSIONS,
SECTIONS,
ATTENDANCE_STATUSES,
    };
  }

  /* PLOP_ADD_METHOD */
async metaData(): Promise<number> {
          return await Promise.all(this.metaDataSeederService.createMetaData())
            .then((created) => {
              const ROW = created.filter(
                (nullValueOrCreatedLanguage) => nullValueOrCreatedLanguage
              ).length;
              return ROW;
            })
            .catch((error) => {
              return Promise.reject(error);
            });
        }
async language(): Promise<number> {
          return await Promise.all(this.languageSeederService.createLanguage())
            .then((created) => {
              const ROW = created.filter(
                (nullValueOrCreatedLanguage) => nullValueOrCreatedLanguage
              ).length;
              return ROW;
            })
            .catch((error) => {
              return Promise.reject(error);
            });
        }
async attendanceSession(): Promise<number> {
          return await Promise.all(this.attendanceSessionSeederService.createAttendanceSession())
            .then((created) => {
              const ROW = created.filter(
                (nullValueOrCreatedLanguage) => nullValueOrCreatedLanguage
              ).length;
              return ROW;
            })
            .catch((error) => {
              return Promise.reject(error);
            });
        }
async section(): Promise<number> {
          return await Promise.all(this.sectionSeederService.createSection())
            .then((created) => {
              const ROW = created.filter(
                (nullValueOrCreatedLanguage) => nullValueOrCreatedLanguage
              ).length;
              return ROW;
            })
            .catch((error) => {
              return Promise.reject(error);
            });
        }
async attendanceStatus(): Promise<number> {
          return await Promise.all(this.attendanceStatusSeederService.createAttendanceStatus())
            .then((created) => {
              const ROW = created.filter(
                (nullValueOrCreatedLanguage) => nullValueOrCreatedLanguage
              ).length;
              return ROW;
            })
            .catch((error) => {
              return Promise.reject(error);
            });
        }
 
}
