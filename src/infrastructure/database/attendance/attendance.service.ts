import { InjectRepository } from "@nestjs/typeorm";
import { BaseService } from "@common/base.service";
import { SortingDirection } from "@common/sorting-direction";
import { Repository } from "typeorm";
import { IAttendanceService } from "./i.attendance.service";
import { AttendancePagedModel } from "./attendance-paged-model";
import { Attendance } from "./attendance.entity";

export class AttendanceService extends BaseService<Repository<Attendance>, Attendance> implements IAttendanceService {
    constructor(
        @InjectRepository(Attendance) protected readonly repository: Repository<Attendance>
    ) {
        super(repository);
    }

    public async getAttendanceList(
        pageNumber: number,
        pageSize: number,
        orderBy: SortingDirection,
        orderByPropertyName: string
    ): Promise<AttendancePagedModel> {

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