import { AutomapperProfile, InjectMapper } from "@automapper/nestjs";
import { Mapper } from "@automapper/types";
import { Injectable } from "@nestjs/common";
import { MetaDataPagedModel } from "@infrastructure/database/meta-data/meta-data-paged-model";
import { MetaData } from "@infrastructure/database/meta-data/meta-data.entity";
import { GetMetaDataBase } from "../get-meta-data-base";
import { GetMetaDataListResponse } from "./get-meta-data-list-response";

@Injectable()
export class GetMetaDataListMapper extends AutomapperProfile {
  constructor(@InjectMapper() mapper: Mapper) {
    super(mapper);
  }

  mapProfile() {
    return (mapper: Mapper) => {
      mapper.createMap(MetaData, GetMetaDataBase);

      mapper.createMap(MetaDataPagedModel, GetMetaDataListResponse);
    };
  }
}


