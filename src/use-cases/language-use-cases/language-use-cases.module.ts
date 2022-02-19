import { Module } from '@nestjs/common';
import { CommonModule } from '@common/common.module';
import { DatabaseModule } from '@infrastructure/database/database.module';

import { GetLanguageListMapper } from './get-language-list/get-language-list-mapper';
import { GetLanguageListController } from './get-language-list/get-language-list.controller';

@Module({
  imports: [CommonModule, DatabaseModule],
  controllers: [GetLanguageListController],
  providers: [GetLanguageListMapper]
})
export class LanguageUseCasesModule {}
