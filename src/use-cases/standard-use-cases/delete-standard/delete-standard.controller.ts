import { Controller, Delete, HttpCode, HttpException, HttpStatus, Inject, Param } from "@nestjs/common";
import { ApiTags } from "@nestjs/swagger";
import { IStandardService } from "@infrastructure/database/standard/i.standard.service";

@ApiTags('standards')
@Controller('standards')
export class DeleteStandardController {
    constructor(
        @Inject('IStandardService') private readonly standardService: IStandardService,
    ) { }

    @Delete(':id')
    @HttpCode(204)
    async execute(@Param('id') id: string): Promise<void> {
        const isExists = await this.standardService.isExistsById(id);
        if (!isExists)
            throw new HttpException('Standard Not Found', HttpStatus.BAD_REQUEST);

        await this.standardService.deleteById(id);
    }
}