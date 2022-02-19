import { AutoMap } from "@automapper/classes";
import { MetaDataBase } from "./meta-data-base";

export class GetMetaDataBase extends MetaDataBase {
    @AutoMap()
    id:string;
}