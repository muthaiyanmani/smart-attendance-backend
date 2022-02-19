import { PagingParams } from '@common/paging-params';
import { ApiProperty } from '@nestjs/swagger';

export class GetMetaDataListRequest extends PagingParams {
  @ApiProperty()
  code: string;
}
