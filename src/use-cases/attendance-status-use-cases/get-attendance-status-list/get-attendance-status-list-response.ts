import { AutoMap } from "@automapper/classes";
import { ApiProperty } from "@nestjs/swagger";
import { PagedResponse } from "@common/paged-response";
import { SortingDirection } from "@common/sorting-direction";
import { GetAttendanceStatusBase } from "../get-attendance-status-base";

export class GetAttendanceStatusListResponse extends PagedResponse {
        
    @AutoMap(() => GetAttendanceStatusBase)
    items:GetAttendanceStatusBase[]
}