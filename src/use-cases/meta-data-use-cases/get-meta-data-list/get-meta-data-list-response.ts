import { AutoMap } from "@automapper/classes";
import { ApiProperty } from "@nestjs/swagger";
import { PagedResponse } from "@common/paged-response";
import { SortingDirection } from "@common/sorting-direction";
import { GetMetaDataBase } from "../get-meta-data-base";

export class GetMetaDataListResponse extends PagedResponse {
        
    @AutoMap(() => GetMetaDataBase)
    items:GetMetaDataBase[]
}