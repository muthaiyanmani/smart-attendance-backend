import { IBaseService } from "@common/i.base.service";
import { SortingDirection } from "@common/sorting-direction";
import { AttendanceStatusPagedModel } from "./attendance-status-paged-model";
import { AttendanceStatus } from "./attendance-status.entity";

export interface IAttendanceStatusService extends IBaseService<AttendanceStatus> {
    getAttendanceStatusList(
        pageNumber: number,
        pageSize: number,
        orderBy: SortingDirection,
        orderByPropertyName: string
    ): Promise<AttendanceStatusPagedModel>
}