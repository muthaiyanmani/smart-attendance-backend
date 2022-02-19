import { InjectMapper } from '@automapper/nestjs';
import { Mapper } from '@automapper/types';
import { Controller, Get, HttpCode, Inject, Query } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { IStudentService } from '@infrastructure/database/student/i.student.service';
import { StudentPagedModel } from '@infrastructure/database/student/student-paged-model';
import { GetStudentListRequest } from './get-student-list-request';
import { GetStudentListResponse } from './get-student-list-response';
import { StudentFilter } from '@infrastructure/database/student/student.filter';

@ApiTags('students')
@Controller('students')
export class GetStudentListController {
  constructor(
    @Inject('IStudentService') private readonly studentService: IStudentService,
    @InjectMapper() private mapper: Mapper
  ) {}

  @Get()
  @HttpCode(200)
  async execute(
    @Query() request: GetStudentListRequest
  ): Promise<Partial<GetStudentListResponse>> {
    const filter: StudentFilter = {
      standardId: request.standardId
    };
    const result = await this.studentService.getStudentList(
      request.pageNumber,
      request.pageSize,
      request.orderBy,
      request.orderByPropertyName,
      filter
    );

    const response = this.mapper.map(
      result,
      GetStudentListResponse,
      StudentPagedModel
    );
    return response;
  }
}
