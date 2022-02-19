import { AutoMap } from '@automapper/classes';
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';

export class StandardBase {
  @AutoMap()
  @ApiProperty()
  name: string;

  @AutoMap()
  @ApiProperty()
  sectionId: string;

  @AutoMap()
  @ApiProperty()
  advisor: string;

  @AutoMap()
  @ApiProperty()
  academicYear: string;

  @AutoMap()
  @ApiPropertyOptional()
  description: string;
}
