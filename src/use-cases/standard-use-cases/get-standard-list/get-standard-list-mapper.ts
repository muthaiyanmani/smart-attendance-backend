import { AutomapperProfile, InjectMapper } from "@automapper/nestjs";
import { Mapper } from "@automapper/types";
import { Injectable } from "@nestjs/common";
import { StandardPagedModel } from "@infrastructure/database/standard/standard-paged-model";
import { Standard } from "@infrastructure/database/standard/standard.entity";
import { GetStandardBase } from "../get-standard-base";
import { GetStandardListResponse } from "./get-standard-list-response";

@Injectable()
export class GetStandardListMapper extends AutomapperProfile {
  constructor(@InjectMapper() mapper: Mapper) {
    super(mapper);
  }

  mapProfile() {
    return (mapper: Mapper) => {
      mapper.createMap(Standard, GetStandardBase);

      mapper.createMap(StandardPagedModel, GetStandardListResponse);
    };
  }
}


