import { IBaseService } from '@common/i.base.service';
import { SortingDirection } from '@common/sorting-direction';
import { MetaDataPagedModel } from './meta-data-paged-model';
import { MetaData } from './meta-data.entity';
import { MetaDataFilter } from './meta-data.filter';

export interface IMetaDataService extends IBaseService<MetaData> {
  getMetaDataList(
    pageNumber: number,
    pageSize: number,
    orderBy: SortingDirection,
    orderByPropertyName: string,
    filter: MetaDataFilter
  ): Promise<MetaDataPagedModel>;
}
