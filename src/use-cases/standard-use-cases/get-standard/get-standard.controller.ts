import { InjectMapper } from "@automapper/nestjs";
import { Mapper } from "@automapper/types";
import { Controller, Get, HttpCode, HttpException, HttpStatus, Inject, Param } from "@nestjs/common";
import { ApiTags } from "@nestjs/swagger";
import { IStandardService } from "@infrastructure/database/standard/i.standard.service";
import { Standard } from "@infrastructure/database/standard/standard.entity";
import { GetStandardResponse } from "./get-standard-response";

@ApiTags('standards')
@Controller('standards')
export class GetStandardController {
    constructor(
        @Inject('IStandardService') private readonly standardService: IStandardService,
        @InjectMapper() private mapper: Mapper
    ) { }

    @Get(':id')
    @HttpCode(200)
    async execute(@Param('id') id: string): Promise<GetStandardResponse> {
        const standard = await this.standardService.findById(id);
        if(!standard)
            throw new HttpException('Standard Not Found',HttpStatus.BAD_REQUEST);
            
        const response = this.mapper.map(standard, GetStandardResponse,Standard );
        return response;
    }
}