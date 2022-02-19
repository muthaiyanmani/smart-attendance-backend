import { AutomapperProfile, InjectMapper } from "@automapper/nestjs";
import { Mapper } from "@automapper/types";
import { Injectable } from "@nestjs/common";
import { Standard } from "@infrastructure/database/standard/standard.entity";
import { GetStandardResponse } from "./get-standard-response";

@Injectable()
export class GetStandardMapper extends AutomapperProfile {
  constructor(@InjectMapper() mapper: Mapper) {
    super(mapper);
  }

  mapProfile() {
    return (mapper: Mapper) => {
      mapper.createMap(Standard,GetStandardResponse );

    };
  }
}