import { AutoMap } from "@automapper/classes";
import { ApiProperty } from "@nestjs/swagger";
import { PagedResponse } from "@common/paged-response";
import { SortingDirection } from "@common/sorting-direction";
import { GetStandardBase } from "../get-standard-base";

export class GetStandardListResponse extends PagedResponse {
        
    @AutoMap(() => GetStandardBase)
    items:GetStandardBase[]
}