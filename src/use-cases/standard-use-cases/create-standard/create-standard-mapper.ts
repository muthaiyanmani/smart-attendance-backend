import { ignore } from "@automapper/core";
import { AutomapperProfile, InjectMapper } from "@automapper/nestjs";
import { Mapper } from "@automapper/types";
import { Injectable } from "@nestjs/common";
import { Standard } from "@infrastructure/database/standard/standard.entity";
import { CreateStandardRequest } from "./create-standard-request";
@Injectable()
export class CreateStandardMapper extends AutomapperProfile {
  constructor(@InjectMapper() mapper: Mapper) {
    super(mapper);
  }

  mapProfile() {
    return (mapper: Mapper) => {

      mapper.createMap(CreateStandardRequest, Standard)
      .forMember(
        (destination) => destination.id,
        ignore()
      );

    };
  }
}