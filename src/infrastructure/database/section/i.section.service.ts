import { IBaseService } from "@common/i.base.service";
import { SortingDirection } from "@common/sorting-direction";
import { SectionPagedModel } from "./section-paged-model";
import { Section } from "./section.entity";

export interface ISectionService extends IBaseService<Section> {
    getSectionList(
        pageNumber: number,
        pageSize: number,
        orderBy: SortingDirection,
        orderByPropertyName: string
    ): Promise<SectionPagedModel>
}