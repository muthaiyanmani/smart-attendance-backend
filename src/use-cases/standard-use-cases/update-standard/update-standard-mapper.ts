import { ignore, mapFrom } from "@automapper/core";
import { AutomapperProfile, InjectMapper } from "@automapper/nestjs";
import { Mapper } from "@automapper/types";
import { Injectable } from "@nestjs/common";
import { Standard } from "@infrastructure/database/standard/standard.entity";
import { UpdateStandardRequest } from "./update-standard-request";

@Injectable()
export class UpdateStandardMapper extends AutomapperProfile {
  constructor(@InjectMapper() mapper: Mapper) {
    super(mapper);
  }

  mapProfile() {
    return (mapper: Mapper) => {
      mapper.createMap(UpdateStandardRequest, Standard)
      .forMember(
        (destination) => destination.id,
        ignore()
      );

    };
  }
}