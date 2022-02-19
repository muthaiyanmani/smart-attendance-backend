import { InjectRepository } from "@nestjs/typeorm";
import { BaseService } from "@common/base.service";
import { SortingDirection } from "@common/sorting-direction";
import { Repository } from "typeorm";
import { IAttendanceSessionService } from "./i.attendance-session.service";
import { AttendanceSessionPagedModel } from "./attendance-session-paged-model";
import { AttendanceSession } from "./attendance-session.entity";

export class AttendanceSessionService extends BaseService<Repository<AttendanceSession>, AttendanceSession> implements IAttendanceSessionService {
    constructor(
        @InjectRepository(AttendanceSession) protected readonly repository: Repository<AttendanceSession>
    ) {
        super(repository);
    }

    public async getAttendanceSessionList(
        pageNumber: number,
        pageSize: number,
        orderBy: SortingDirection,
        orderByPropertyName: string
    ): Promise<AttendanceSessionPagedModel> {

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