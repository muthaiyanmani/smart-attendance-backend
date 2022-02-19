import { AutoMap } from "@automapper/classes";
import { PagedResponse } from "@common/paged-response";
import { MetaData } from "./meta-data.entity";

export class MetaDataPagedModel extends PagedResponse {
    @AutoMap(()=>MetaData)
    items:MetaData[];
}