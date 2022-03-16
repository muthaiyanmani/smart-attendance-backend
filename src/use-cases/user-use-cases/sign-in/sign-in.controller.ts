import {
  Body,
  Controller,
  Inject,
  Post
} from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { IUserService } from 'src/infrastructure/database/user/i.user.service';
import { SignInRequest } from './sign-in-request';
import { JwtService } from '@nestjs/jwt';

@ApiTags('users')
@Controller('users')
export class SignInController {
  constructor(
    @Inject('IUserService') private readonly userService: IUserService,
    private readonly jwtService: JwtService
  ) {}

  @Post('sign-in')
  async create(@Body() body: SignInRequest): Promise<any> {
    const user = await this.userService.signIn(body.username, body.password);

    const permissions: Array<string> = [];

    const payload = {
      username: user.username,
      id: user.id,
      name: user.name,
      permissions: permissions
    };

    const accessToken: string = this.jwtService.sign(payload);

    return {
      accessToken,
      userDetail: {
        username: user.username,
        name: user.name
      }
    };
  }
}
