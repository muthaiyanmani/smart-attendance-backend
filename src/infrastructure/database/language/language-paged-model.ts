import { AutoMap } from "@automapper/classes";
import { PagedResponse } from "@common/paged-response";
import { Language } from "./language.entity";

export class LanguagePagedModel extends PagedResponse {
    @AutoMap(()=>Language)
    items:Language[];
}