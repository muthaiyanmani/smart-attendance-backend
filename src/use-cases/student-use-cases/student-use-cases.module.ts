import { Module } from '@nestjs/common';
import { CommonModule } from '@common/common.module';
import { DatabaseModule } from '@infrastructure/database/database.module';
import { CreateStudentMapper } from './create-student/create-student-mapper';
import { CreateStudentController } from './create-student/create-student.controller';
import { DeleteStudentController } from './delete-student/delete-student.controller';
import { GetStudentListMapper } from './get-student-list/get-student-list-mapper';
import { GetStudentListController } from './get-student-list/get-student-list.controller';
import { GetStudentMapper } from './get-student/get-student-mapper';
import { GetStudentController } from './get-student/get-student.controller';
import { UpdateStudentMapper } from './update-student/update-student-mapper';
import { UpdateStudentController } from './update-student/update-student.controller';

@Module({
    imports: [
        CommonModule,
        DatabaseModule
    ],
    controllers: [
        CreateStudentController,
        UpdateStudentController,
        DeleteStudentController,
        GetStudentController,
        GetStudentListController
    ],
    providers: [
        CreateStudentMapper,
        GetStudentListMapper,
        GetStudentMapper,
        UpdateStudentMapper
    ],
})
export class StudentUseCasesModule {}
