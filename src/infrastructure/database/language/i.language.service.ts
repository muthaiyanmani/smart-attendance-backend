import { IBaseService } from "@common/i.base.service";
import { SortingDirection } from "@common/sorting-direction";
import { LanguagePagedModel } from "./language-paged-model";
import { Language } from "./language.entity";

export interface ILanguageService extends IBaseService<Language> {
    getLanguageList(
        pageNumber: number,
        pageSize: number,
        orderBy: SortingDirection,
        orderByPropertyName: string
    ): Promise<LanguagePagedModel>
}