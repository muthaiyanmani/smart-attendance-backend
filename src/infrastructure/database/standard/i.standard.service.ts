import { IBaseService } from "@common/i.base.service";
import { SortingDirection } from "@common/sorting-direction";
import { StandardPagedModel } from "./standard-paged-model";
import { Standard } from "./standard.entity";

export interface IStandardService extends IBaseService<Standard> {
    getStandardList(
        pageNumber: number,
        pageSize: number,
        orderBy: SortingDirection,
        orderByPropertyName: string
    ): Promise<StandardPagedModel>
}