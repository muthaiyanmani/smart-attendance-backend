import { InjectMapper } from "@automapper/nestjs";
import { Mapper } from "@automapper/types";
import { Controller, Get, HttpCode, Inject, Query } from "@nestjs/common";
import { ApiTags } from "@nestjs/swagger";
import { IStandardService } from "@infrastructure/database/standard/i.standard.service";
import { StandardPagedModel } from "@infrastructure/database/standard/standard-paged-model";
import { GetStandardListRequest } from "./get-standard-list-request";
import { GetStandardListResponse } from "./get-standard-list-response";

@ApiTags('standards')
@Controller('standards')
export class GetStandardListController {
    constructor(
        @Inject('IStandardService') private readonly standardService: IStandardService,
        @InjectMapper() private mapper: Mapper
    ) { }

    @Get()
    @HttpCode(200)
    async execute(@Query() request: GetStandardListRequest): Promise<Partial<GetStandardListResponse>> {

        const result = await this.standardService.getStandardList(
            request.pageNumber,
            request.pageSize,
            request.orderBy,
            request.orderByPropertyName
        );

        const response = this.mapper.map(result, GetStandardListResponse, StandardPagedModel);
        return response;
    }
}