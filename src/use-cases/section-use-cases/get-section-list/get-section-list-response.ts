import { AutoMap } from "@automapper/classes";
import { ApiProperty } from "@nestjs/swagger";
import { PagedResponse } from "@common/paged-response";
import { SortingDirection } from "@common/sorting-direction";
import { GetSectionBase } from "../get-section-base";

export class GetSectionListResponse extends PagedResponse {
        
    @AutoMap(() => GetSectionBase)
    items:GetSectionBase[]
}