import { AutoMap } from "@automapper/classes";
import { ApiProperty } from "@nestjs/swagger";
import { PagedResponse } from "@common/paged-response";
import { SortingDirection } from "@common/sorting-direction";
import { Get{{pascalCase singularName}}Base } from "../get-{{dashCase singularName}}-base";

export class Get{{pascalCase singularName}}ListResponse extends PagedResponse {
        
    @AutoMap(() => Get{{pascalCase singularName}}Base)
    items:Get{{pascalCase singularName}}Base[]
}