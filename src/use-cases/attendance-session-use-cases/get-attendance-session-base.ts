import { AutoMap } from "@automapper/classes";
import { AttendanceSessionBase } from "./attendance-session-base";

export class GetAttendanceSessionBase extends AttendanceSessionBase {
    @AutoMap()
    id:string;
}