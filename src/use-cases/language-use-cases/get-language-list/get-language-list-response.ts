import { AutoMap } from "@automapper/classes";
import { ApiProperty } from "@nestjs/swagger";
import { PagedResponse } from "@common/paged-response";
import { SortingDirection } from "@common/sorting-direction";
import { GetLanguageBase } from "../get-language-base";

export class GetLanguageListResponse extends PagedResponse {
        
    @AutoMap(() => GetLanguageBase)
    items:GetLanguageBase[]
}