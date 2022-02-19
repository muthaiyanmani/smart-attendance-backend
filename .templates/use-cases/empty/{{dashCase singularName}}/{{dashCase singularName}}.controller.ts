import { InjectMapper } from "@automapper/nestjs";
import { Mapper } from "@automapper/types";
import { Controller, Get, HttpCode, Inject, Query } from "@nestjs/common";
import { ApiTags } from "@nestjs/swagger";
import { I{{pascalCase entityName}}Service } from "@infrastructure/database/{{dashCase entityName}}/i.{{dashCase entityName}}.service";
import { {{pascalCase singularName}}Request } from "./{{dashCase singularName}}-request";
import { {{pascalCase singularName}}Response } from "./{{dashCase singularName}}-response";

@ApiTags('{{camelCase pluralName}}')
@Controller('{{camelCase pluralName}}')
export class {{pascalCase singularName}}Controller {
    constructor(
        @Inject('I{{pascalCase entityName}}Service') private readonly {{camelCase entityName}}Service: I{{pascalCase entityName}}Service,
        @InjectMapper() private mapper: Mapper
    ) { }

    @Get()
    @HttpCode(200)
    async execute(@Query() request: {{pascalCase singularName}}Request): Promise<Partial<{{pascalCase singularName}}Response>> {

     
        return null;
    }
}