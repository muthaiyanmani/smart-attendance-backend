import { InjectRepository } from "@nestjs/typeorm";
import { BaseService } from "@common/base.service";
import { SortingDirection } from "@common/sorting-direction";
import { Repository } from "typeorm";
import { ISectionService } from "./i.section.service";
import { SectionPagedModel } from "./section-paged-model";
import { Section } from "./section.entity";

export class SectionService extends BaseService<Repository<Section>, Section> implements ISectionService {
    constructor(
        @InjectRepository(Section) protected readonly repository: Repository<Section>
    ) {
        super(repository);
    }

    public async getSectionList(
        pageNumber: number,
        pageSize: number,
        orderBy: SortingDirection,
        orderByPropertyName: string
    ): Promise<SectionPagedModel> {

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