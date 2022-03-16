import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty } from "class-validator";

export class SignInRequest {
    @ApiProperty()
    @IsNotEmpty()
    username!: string;
    @ApiProperty()
    @IsNotEmpty()
    password!: string;
}