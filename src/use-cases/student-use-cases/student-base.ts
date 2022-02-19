import { AutoMap } from '@automapper/classes';
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';

export class StudentBase {
  @AutoMap()
  @ApiProperty()
  firstName: string;

  @AutoMap()
  @ApiProperty()
  lastName: string;

  @AutoMap()
  @ApiProperty()
  fatherName: string;

  @AutoMap()
  @ApiProperty()
  motherName: string;

  @AutoMap()
  @ApiProperty()
  fatherOccupation: string;

  @AutoMap()
  @ApiProperty()
  motherOccupation: string;

  @AutoMap()
  @ApiProperty()
  annualIncome: string;

  @AutoMap()
  @ApiPropertyOptional()
  email: string;

  @AutoMap()
  @ApiProperty()
  mobile: string;

  @AutoMap()
  @ApiProperty()
  languageId: string;

  @AutoMap()
  @ApiProperty()
  dateOfBirth: Date;

  @AutoMap()
  @ApiProperty()
  address: string;

  @AutoMap()
  @ApiPropertyOptional()
  photoPath: string;

  @AutoMap()
  @ApiProperty()
  standardId: string;
}
