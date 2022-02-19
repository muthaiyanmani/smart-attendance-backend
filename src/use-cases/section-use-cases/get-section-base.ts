import { AutoMap } from "@automapper/classes";
import { SectionBase } from "./section-base";

export class GetSectionBase extends SectionBase {
    @AutoMap()
    id:string;
}