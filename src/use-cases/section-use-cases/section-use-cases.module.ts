import { Module } from '@nestjs/common';
import { CommonModule } from '@common/common.module';
import { DatabaseModule } from '@infrastructure/database/database.module';
import { GetSectionListMapper } from './get-section-list/get-section-list-mapper';
import { GetSectionListController } from './get-section-list/get-section-list.controller';

@Module({
  imports: [CommonModule, DatabaseModule],
  controllers: [GetSectionListController],
  providers: [GetSectionListMapper]
})
export class SectionUseCasesModule {}
