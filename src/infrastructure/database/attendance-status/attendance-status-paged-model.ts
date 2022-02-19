import { AutoMap } from "@automapper/classes";
import { PagedResponse } from "@common/paged-response";
import { AttendanceStatus } from "./attendance-status.entity";

export class AttendanceStatusPagedModel extends PagedResponse {
    @AutoMap(()=>AttendanceStatus)
    items:AttendanceStatus[];
}