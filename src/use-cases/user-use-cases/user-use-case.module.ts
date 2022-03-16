import { Module } from "@nestjs/common";
import { JwtModule } from "@nestjs/jwt";
import { PassportModule } from "@nestjs/passport";
import { CommonModule } from "src/common/common.module";
import { ConfigModule } from "src/infrastructure/config/config.module";
import { ConfigService } from "src/infrastructure/config/config.service";
import { DatabaseModule } from "src/infrastructure/database/database.module";
import { FirebaseAuthStrategy } from "./firebase-auth-strategy";
import { SignInController } from "./sign-in/sign-in.controller";
import { SignUpMapper } from "./sign-up/sign-up-mapper";
import { SignUpController } from "./sign-up/sign-up.controller";

@Module({
  imports: [
    CommonModule,
    DatabaseModule,
    PassportModule.register({ defaultStrategy: "jwt" }),
    JwtModule.registerAsync({
      imports: [ConfigModule],
      useFactory: (configService: ConfigService) =>
        configService.getJWTSecret(),
      inject: [ConfigService],
    }),
  ],
  controllers: [
    SignUpController,
    SignInController,
  ],
  providers: [
    SignUpMapper,
    FirebaseAuthStrategy,
  ],
  exports: [
    PassportModule,
  ],
})
export class UserUseCaseModule {}
