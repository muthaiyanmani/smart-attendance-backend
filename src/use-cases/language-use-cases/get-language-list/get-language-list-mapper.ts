import { AutomapperProfile, InjectMapper } from "@automapper/nestjs";
import { Mapper } from "@automapper/types";
import { Injectable } from "@nestjs/common";
import { LanguagePagedModel } from "@infrastructure/database/language/language-paged-model";
import { Language } from "@infrastructure/database/language/language.entity";
import { GetLanguageBase } from "../get-language-base";
import { GetLanguageListResponse } from "./get-language-list-response";

@Injectable()
export class GetLanguageListMapper extends AutomapperProfile {
  constructor(@InjectMapper() mapper: Mapper) {
    super(mapper);
  }

  mapProfile() {
    return (mapper: Mapper) => {
      mapper.createMap(Language, GetLanguageBase);

      mapper.createMap(LanguagePagedModel, GetLanguageListResponse);
    };
  }
}


