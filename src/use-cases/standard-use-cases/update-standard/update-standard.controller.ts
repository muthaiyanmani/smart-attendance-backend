import { InjectMapper } from "@automapper/nestjs";
import { Mapper } from "@automapper/types";
import { Body, Controller, HttpCode, HttpException, HttpStatus, Inject, Param, Put } from "@nestjs/common";
import { ApiTags } from "@nestjs/swagger";
import { IStandardService } from "@infrastructure/database/standard/i.standard.service";
import { Standard } from "@infrastructure/database/standard/standard.entity";
import { UpdateStandardRequest } from "./update-standard-request";

@ApiTags('standards')
@Controller('standards')
export class UpdateStandardController {
    constructor(
        @Inject('IStandardService') private readonly standardService: IStandardService,
        @InjectMapper() private mapper: Mapper
    ) { }

    @Put(':id')
    @HttpCode(204)
    async execute(@Param('id') id: string, @Body() request: UpdateStandardRequest): Promise<void> {
        const isExists = await this.standardService.isExistsById(id);
        if(!isExists)
            throw new HttpException('Standard Not Found',HttpStatus.BAD_REQUEST);
            
        const standard = this.mapper.map(request, Standard, UpdateStandardRequest);
        standard.setId(id);
        await this.standardService.updateById(id, standard);
    }
}