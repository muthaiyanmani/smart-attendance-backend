import { InjectMapper } from '@automapper/nestjs';
import { Mapper } from '@automapper/types';
import { Controller, Get, HttpCode, Inject, Query } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { IAttendanceStatusService } from '@infrastructure/database/attendance-status/i.attendance-status.service';
import { AttendanceStatusPagedModel } from '@infrastructure/database/attendance-status/attendance-status-paged-model';
import { GetAttendanceStatusListRequest } from './get-attendance-status-list-request';
import { GetAttendanceStatusListResponse } from './get-attendance-status-list-response';

@ApiTags('master')
@Controller('attendance-statuses')
export class GetAttendanceStatusListController {
  constructor(
    @Inject('IAttendanceStatusService')
    private readonly attendanceStatusService: IAttendanceStatusService,
    @InjectMapper() private mapper: Mapper
  ) {}

  @Get()
  @HttpCode(200)
  async execute(
    @Query() request: GetAttendanceStatusListRequest
  ): Promise<Partial<GetAttendanceStatusListResponse>> {
    const result = await this.attendanceStatusService.getAttendanceStatusList(
      request.pageNumber,
      request.pageSize,
      request.orderBy,
      request.orderByPropertyName
    );

    const response = this.mapper.map(
      result,
      GetAttendanceStatusListResponse,
      AttendanceStatusPagedModel
    );
    return response;
  }
}
