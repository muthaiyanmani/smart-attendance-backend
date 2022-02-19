import { AutomapperProfile, InjectMapper } from "@automapper/nestjs";
import { Mapper } from "@automapper/types";
import { Injectable } from "@nestjs/common";
import { SectionPagedModel } from "@infrastructure/database/section/section-paged-model";
import { Section } from "@infrastructure/database/section/section.entity";
import { GetSectionBase } from "../get-section-base";
import { GetSectionListResponse } from "./get-section-list-response";

@Injectable()
export class GetSectionListMapper extends AutomapperProfile {
  constructor(@InjectMapper() mapper: Mapper) {
    super(mapper);
  }

  mapProfile() {
    return (mapper: Mapper) => {
      mapper.createMap(Section, GetSectionBase);

      mapper.createMap(SectionPagedModel, GetSectionListResponse);
    };
  }
}


