import { AutoMap } from "@automapper/classes";
import { ApiProperty } from "@nestjs/swagger";
import { PagedResponse } from "@common/paged-response";
import { SortingDirection } from "@common/sorting-direction";
import { GetStudentBase } from "../get-student-base";

export class GetStudentListResponse extends PagedResponse {
        
    @AutoMap(() => GetStudentBase)
    items:GetStudentBase[]
}