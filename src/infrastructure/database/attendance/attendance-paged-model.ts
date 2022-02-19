import { AutoMap } from "@automapper/classes";
import { PagedResponse } from "@common/paged-response";
import { Attendance } from "./attendance.entity";

export class AttendancePagedModel extends PagedResponse {
    @AutoMap(()=>Attendance)
    items:Attendance[];
}