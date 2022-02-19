import { Module } from '@nestjs/common';
import { CommonModule } from '@common/common.module';
import { DatabaseModule } from '@infrastructure/database/database.module';
import { CreateStandardMapper } from './create-standard/create-standard-mapper';
import { CreateStandardController } from './create-standard/create-standard.controller';
import { DeleteStandardController } from './delete-standard/delete-standard.controller';
import { GetStandardListMapper } from './get-standard-list/get-standard-list-mapper';
import { GetStandardListController } from './get-standard-list/get-standard-list.controller';
import { GetStandardMapper } from './get-standard/get-standard-mapper';
import { GetStandardController } from './get-standard/get-standard.controller';
import { UpdateStandardMapper } from './update-standard/update-standard-mapper';
import { UpdateStandardController } from './update-standard/update-standard.controller';

@Module({
    imports: [
        CommonModule,
        DatabaseModule
    ],
    controllers: [
        CreateStandardController,
        UpdateStandardController,
        DeleteStandardController,
        GetStandardController,
        GetStandardListController
    ],
    providers: [
        CreateStandardMapper,
        GetStandardListMapper,
        GetStandardMapper,
        UpdateStandardMapper
    ],
})
export class StandardUseCasesModule {}
