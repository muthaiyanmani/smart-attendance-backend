import { AutoMap } from "@automapper/classes";
import { PagedResponse } from "@common/paged-response";
import { Standard } from "./standard.entity";

export class StandardPagedModel extends PagedResponse {
    @AutoMap(()=>Standard)
    items:Standard[];
}