import { InjectMapper } from "@automapper/nestjs";
import { Mapper } from "@automapper/types";
import { Body, Inject, Post } from "@nestjs/common";
import { Controller } from "@nestjs/common";
import { ApiTags } from "@nestjs/swagger";
import { IUserService } from "src/infrastructure/database/user/i.user.service";
import { User } from "src/infrastructure/database/user/user.entity";
import { SignUpRequest } from "./sign-up-request";

@ApiTags("users")
@Controller("users")
export class SignUpController {
  constructor(
    @Inject("IUserService") private readonly userService: IUserService,
    @InjectMapper() private readonly mapper: Mapper,
  ) {}

  @Post("sign-up")
  async create(@Body() body: SignUpRequest): Promise<void> {
    const user = this.mapper.map(body, User, SignUpRequest);
    await this.userService.insert(user);
  }
}
