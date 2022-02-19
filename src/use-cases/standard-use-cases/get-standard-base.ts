import { AutoMap } from "@automapper/classes";
import { StandardBase } from "./standard-base";

export class GetStandardBase extends StandardBase {
    @AutoMap()
    id:string;
}