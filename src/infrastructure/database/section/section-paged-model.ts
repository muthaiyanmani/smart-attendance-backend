import { AutoMap } from "@automapper/classes";
import { PagedResponse } from "@common/paged-response";
import { Section } from "./section.entity";

export class SectionPagedModel extends PagedResponse {
    @AutoMap(()=>Section)
    items:Section[];
}