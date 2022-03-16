import { AutoMap } from "@automapper/classes";
import { ApiProperty } from "@nestjs/swagger";
import { IsEmail, IsNotEmpty } from "class-validator";

export class SignUpRequest {
  @ApiProperty()
  @AutoMap()
  @IsNotEmpty()
  name!: string;

  @ApiProperty()
  @AutoMap()
  @IsNotEmpty()
  @IsEmail()
  email!: string;

  @ApiProperty()
  @AutoMap()
  @IsNotEmpty()
  mobileNumber!: string;

  @ApiProperty()
  @AutoMap()
  @IsNotEmpty()
  password!: string;
}
