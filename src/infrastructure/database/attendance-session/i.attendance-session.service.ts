import { IBaseService } from "@common/i.base.service";
import { SortingDirection } from "@common/sorting-direction";
import { AttendanceSessionPagedModel } from "./attendance-session-paged-model";
import { AttendanceSession } from "./attendance-session.entity";

export interface IAttendanceSessionService extends IBaseService<AttendanceSession> {
    getAttendanceSessionList(
        pageNumber: number,
        pageSize: number,
        orderBy: SortingDirection,
        orderByPropertyName: string
    ): Promise<AttendanceSessionPagedModel>
}