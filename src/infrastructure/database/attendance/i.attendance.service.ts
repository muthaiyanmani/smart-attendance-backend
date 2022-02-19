import { IBaseService } from "@common/i.base.service";
import { SortingDirection } from "@common/sorting-direction";
import { AttendancePagedModel } from "./attendance-paged-model";
import { Attendance } from "./attendance.entity";

export interface IAttendanceService extends IBaseService<Attendance> {
    getAttendanceList(
        pageNumber: number,
        pageSize: number,
        orderBy: SortingDirection,
        orderByPropertyName: string
    ): Promise<AttendancePagedModel>
}