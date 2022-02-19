import { InjectMapper } from '@automapper/nestjs';
import { Mapper } from '@automapper/types';
import { Controller, Get, HttpCode, Inject, Query } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { ILanguageService } from '@infrastructure/database/language/i.language.service';
import { LanguagePagedModel } from '@infrastructure/database/language/language-paged-model';
import { GetLanguageListRequest } from './get-language-list-request';
import { GetLanguageListResponse } from './get-language-list-response';

@ApiTags('master')
@Controller('languages')
export class GetLanguageListController {
  constructor(
    @Inject('ILanguageService')
    private readonly languageService: ILanguageService,
    @InjectMapper() private mapper: Mapper
  ) {}

  @Get()
  @HttpCode(200)
  async execute(
    @Query() request: GetLanguageListRequest
  ): Promise<Partial<GetLanguageListResponse>> {
    const result = await this.languageService.getLanguageList(
      request.pageNumber,
      request.pageSize,
      request.orderBy,
      request.orderByPropertyName
    );

    const response = this.mapper.map(
      result,
      GetLanguageListResponse,
      LanguagePagedModel
    );
    return response;
  }
}
