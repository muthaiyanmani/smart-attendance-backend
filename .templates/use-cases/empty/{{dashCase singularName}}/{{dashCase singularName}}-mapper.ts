import { AutomapperProfile, InjectMapper } from "@automapper/nestjs";
import { Mapper } from "@automapper/types";
import { Injectable } from "@nestjs/common";
import { {{pascalCase entityName}} } from "@infrastructure/database/{{dashCase entityName}}/{{dashCase entityName}}.entity";
import { {{pascalCase singularName}}Response } from "./{{dashCase singularName}}-response";

@Injectable()
export class {{pascalCase singularName}}Mapper extends AutomapperProfile {
  constructor(@InjectMapper() mapper: Mapper) {
    super(mapper);
  }

  mapProfile() {
    return (mapper: Mapper) => {
      
    };
  }
}


