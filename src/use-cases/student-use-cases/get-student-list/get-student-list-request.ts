import { AutoMap } from '@automapper/classes';
import { PagingParams } from '@common/paging-params';
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';

export class GetStudentListRequest extends PagingParams {
  @AutoMap()
  @ApiPropertyOptional()
  standardId: string;
}
