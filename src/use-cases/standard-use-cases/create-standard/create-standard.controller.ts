import { InjectMapper } from "@automapper/nestjs";
import { Mapper } from "@automapper/types";
import { Body, Controller, HttpCode, Inject, Post } from "@nestjs/common";
import { ApiTags } from "@nestjs/swagger";
import { IStandardService } from "@infrastructure/database/standard/i.standard.service";
import { Standard } from "@infrastructure/database/standard/standard.entity";
import { CreateStandardRequest } from "./create-standard-request";

@ApiTags('standards')
@Controller('standards')
export class CreateStandardController {
    constructor(
        @Inject('IStandardService') private readonly standardService: IStandardService,
        @InjectMapper() private mapper: Mapper
    ) { }

    @Post()
    @HttpCode(201)
    async execute(@Body() request: CreateStandardRequest): Promise<any> {

        const standard = this.mapper.map(request, Standard, CreateStandardRequest);
        const result = await this.standardService.insert(standard);
        return {id:result.id};
    }
}