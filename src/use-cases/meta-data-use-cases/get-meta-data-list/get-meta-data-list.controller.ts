import { InjectMapper } from '@automapper/nestjs';
import { Mapper } from '@automapper/types';
import { Controller, Get, HttpCode, Inject, Query } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { IMetaDataService } from '@infrastructure/database/meta-data/i.meta-data.service';
import { MetaDataPagedModel } from '@infrastructure/database/meta-data/meta-data-paged-model';
import { GetMetaDataListRequest } from './get-meta-data-list-request';
import { GetMetaDataListResponse } from './get-meta-data-list-response';
import { MetaDataFilter } from '@infrastructure/database/meta-data/meta-data.filter';

@ApiTags('meta-data')
@Controller('meta-data')
export class GetMetaDataListController {
  constructor(
    @Inject('IMetaDataService')
    private readonly metaDataService: IMetaDataService,
    @InjectMapper() private mapper: Mapper
  ) {}

  @Get()
  @HttpCode(200)
  async execute(
    @Query() request: GetMetaDataListRequest
  ): Promise<Partial<GetMetaDataListResponse>> {
    const filter: MetaDataFilter = {
      code: request.code
    };
    const result = await this.metaDataService.getMetaDataList(
      request.pageNumber,
      request.pageSize,
      request.orderBy,
      request.orderByPropertyName,
      filter
    );

    const response = this.mapper.map(
      result,
      GetMetaDataListResponse,
      MetaDataPagedModel
    );
    return response;
  }
}
