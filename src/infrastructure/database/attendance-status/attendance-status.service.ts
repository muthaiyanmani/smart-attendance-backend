import { InjectRepository } from "@nestjs/typeorm";
import { BaseService } from "@common/base.service";
import { SortingDirection } from "@common/sorting-direction";
import { Repository } from "typeorm";
import { IAttendanceStatusService } from "./i.attendance-status.service";
import { AttendanceStatusPagedModel } from "./attendance-status-paged-model";
import { AttendanceStatus } from "./attendance-status.entity";

export class AttendanceStatusService extends BaseService<Repository<AttendanceStatus>, AttendanceStatus> implements IAttendanceStatusService {
    constructor(
        @InjectRepository(AttendanceStatus) protected readonly repository: Repository<AttendanceStatus>
    ) {
        super(repository);
    }

    public async getAttendanceStatusList(
        pageNumber: number,
        pageSize: number,
        orderBy: SortingDirection,
        orderByPropertyName: string
    ): Promise<AttendanceStatusPagedModel> {

        const queryBuilder = this.createQueryBuilder('p');

        const result = await this.paged(queryBuilder,
            pageNumber,
            pageSize,
            orderBy,
            orderByPropertyName
        );
        return result;
    }

}