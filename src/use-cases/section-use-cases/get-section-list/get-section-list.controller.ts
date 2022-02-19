import { InjectMapper } from '@automapper/nestjs';
import { Mapper } from '@automapper/types';
import { Controller, Get, HttpCode, Inject, Query } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { ISectionService } from '@infrastructure/database/section/i.section.service';
import { SectionPagedModel } from '@infrastructure/database/section/section-paged-model';
import { GetSectionListRequest } from './get-section-list-request';
import { GetSectionListResponse } from './get-section-list-response';

@ApiTags('master')
@Controller('sections')
export class GetSectionListController {
  constructor(
    @Inject('ISectionService') private readonly sectionService: ISectionService,
    @InjectMapper() private mapper: Mapper
  ) {}

  @Get()
  @HttpCode(200)
  async execute(
    @Query() request: GetSectionListRequest
  ): Promise<Partial<GetSectionListResponse>> {
    const result = await this.sectionService.getSectionList(
      request.pageNumber,
      request.pageSize,
      request.orderBy,
      request.orderByPropertyName
    );

    const response = this.mapper.map(
      result,
      GetSectionListResponse,
      SectionPagedModel
    );
    return response;
  }
}
