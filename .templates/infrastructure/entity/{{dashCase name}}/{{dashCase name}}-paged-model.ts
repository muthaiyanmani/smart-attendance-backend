import { AutoMap } from "@automapper/classes";
import { PagedResponse } from "@common/paged-response";
import { {{pascalCase name}} } from "./{{dashCase name}}.entity";

export class {{pascalCase name}}PagedModel extends PagedResponse {
    @AutoMap(()=>{{pascalCase name}})
    items:{{pascalCase name}}[];
}