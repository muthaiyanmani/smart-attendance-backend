import { InjectMapper } from '@automapper/nestjs';
import { Mapper } from '@automapper/types';
import { Controller, Get, HttpCode, Inject, Query } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { IAttendanceSessionService } from '@infrastructure/database/attendance-session/i.attendance-session.service';
import { AttendanceSessionPagedModel } from '@infrastructure/database/attendance-session/attendance-session-paged-model';
import { GetAttendanceSessionListRequest } from './get-attendance-session-list-request';
import { GetAttendanceSessionListResponse } from './get-attendance-session-list-response';

@ApiTags('master')
@Controller('attendance-sessions')
export class GetAttendanceSessionListController {
  constructor(
    @Inject('IAttendanceSessionService')
    private readonly attendanceSessionService: IAttendanceSessionService,
    @InjectMapper() private mapper: Mapper
  ) {}

  @Get()
  @HttpCode(200)
  async execute(
    @Query() request: GetAttendanceSessionListRequest
  ): Promise<Partial<GetAttendanceSessionListResponse>> {
    const result = await this.attendanceSessionService.getAttendanceSessionList(
      request.pageNumber,
      request.pageSize,
      request.orderBy,
      request.orderByPropertyName
    );

    const response = this.mapper.map(
      result,
      GetAttendanceSessionListResponse,
      AttendanceSessionPagedModel
    );
    return response;
  }
}
