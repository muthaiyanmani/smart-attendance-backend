import { AutoMap } from "@automapper/classes";
import { ApiProperty } from "@nestjs/swagger";
import { PagedResponse } from "@common/paged-response";
import { SortingDirection } from "@common/sorting-direction";
import { GetAttendanceSessionBase } from "../get-attendance-session-base";

export class GetAttendanceSessionListResponse extends PagedResponse {
        
    @AutoMap(() => GetAttendanceSessionBase)
    items:GetAttendanceSessionBase[]
}