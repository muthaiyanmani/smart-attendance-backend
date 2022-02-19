import { InjectRepository } from "@nestjs/typeorm";
import { BaseService } from "@common/base.service";
import { SortingDirection } from "@common/sorting-direction";
import { Repository } from "typeorm";
import { IStandardService } from "./i.standard.service";
import { StandardPagedModel } from "./standard-paged-model";
import { Standard } from "./standard.entity";

export class StandardService extends BaseService<Repository<Standard>, Standard> implements IStandardService {
    constructor(
        @InjectRepository(Standard) protected readonly repository: Repository<Standard>
    ) {
        super(repository);
    }

    public async getStandardList(
        pageNumber: number,
        pageSize: number,
        orderBy: SortingDirection,
        orderByPropertyName: string
    ): Promise<StandardPagedModel> {

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