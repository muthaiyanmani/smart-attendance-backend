import { fromValue, ignore, mapFrom } from "@automapper/core";
import { AutomapperProfile, InjectMapper } from "@automapper/nestjs";
import { Mapper } from "@automapper/types";
import { Injectable } from "@nestjs/common";
import { User } from "src/infrastructure/database/user/user.entity";
import { SignUpRequest } from "./sign-up-request";

@Injectable()
export class SignUpMapper extends AutomapperProfile {
  constructor(@InjectMapper() mapper: Mapper) {
    super(mapper);
  }

  mapProfile() {
    return (mapper: Mapper) => {

      mapper.createMap(SignUpRequest, User)
        .forMember(
          (destination) => destination.username,
          mapFrom((source) => source.email)
        )
        .forMember(
          (destination) => destination.id,
          ignore()
        ).forMember(
          (destination) => destination.isVerified,
          fromValue(true)
        );

    };
  }
}