import { InjectRepository } from '@nestjs/typeorm';
import { BaseService } from '@common/base.service';
import { SortingDirection } from '@common/sorting-direction';
import { Repository } from 'typeorm';
import { IMetaDataService } from './i.meta-data.service';
import { MetaDataPagedModel } from './meta-data-paged-model';
import { MetaData } from './meta-data.entity';
import { MetaDataFilter } from './meta-data.filter';
import { nameof } from '@common/utils/nameof';

export class MetaDataService
  extends BaseService<Repository<MetaData>, MetaData>
  implements IMetaDataService
{
  constructor(
    @InjectRepository(MetaData)
    protected readonly repository: Repository<MetaData>
  ) {
    super(repository);
  }

  public async getMetaDataList(
    pageNumber: number,
    pageSize: number,
    orderBy: SortingDirection,
    orderByPropertyName: string,
    filter: MetaDataFilter
  ): Promise<MetaDataPagedModel> {
    const queryBuilder = this.createQueryBuilder('c');

    if (filter.code) {
      queryBuilder.andWhere(`c.${nameof<MetaData>((x) => x.code)} =:code`, {
        code: filter.code
      });
    }

    const result = await this.paged(
      queryBuilder,
      pageNumber,
      pageSize,
      orderBy,
      orderByPropertyName
    );
    return result;
  }
}
