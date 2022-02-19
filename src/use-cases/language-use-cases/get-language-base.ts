import { AutoMap } from "@automapper/classes";
import { LanguageBase } from "./language-base";

export class GetLanguageBase extends LanguageBase {
    @AutoMap()
    id:string;
}