import { Module } from '@nestjs/common';
import { CommonModule } from '@common/common.module';
import { DatabaseModule } from '@infrastructure/database/database.module';
import { GetMetaDataListMapper } from './get-meta-data-list/get-meta-data-list-mapper';
import { GetMetaDataListController } from './get-meta-data-list/get-meta-data-list.controller';

@Module({
  imports: [CommonModule, DatabaseModule],
  controllers: [GetMetaDataListController],
  providers: [GetMetaDataListMapper]
})
export class MetaDataUseCasesModule {}
