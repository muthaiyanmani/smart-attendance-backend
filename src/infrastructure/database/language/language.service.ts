import { InjectRepository } from "@nestjs/typeorm";
import { BaseService } from "@common/base.service";
import { SortingDirection } from "@common/sorting-direction";
import { Repository } from "typeorm";
import { ILanguageService } from "./i.language.service";
import { LanguagePagedModel } from "./language-paged-model";
import { Language } from "./language.entity";

export class LanguageService extends BaseService<Repository<Language>, Language> implements ILanguageService {
    constructor(
        @InjectRepository(Language) protected readonly repository: Repository<Language>
    ) {
        super(repository);
    }

    public async getLanguageList(
        pageNumber: number,
        pageSize: number,
        orderBy: SortingDirection,
        orderByPropertyName: string
    ): Promise<LanguagePagedModel> {

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