import { AutoMap } from "@automapper/classes";
import { PagedResponse } from "@common/paged-response";
import { AttendanceSession } from "./attendance-session.entity";

export class AttendanceSessionPagedModel extends PagedResponse {
    @AutoMap(()=>AttendanceSession)
    items:AttendanceSession[];
}