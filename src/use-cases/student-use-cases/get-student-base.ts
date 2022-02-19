import { AutoMap } from "@automapper/classes";
import { StudentBase } from "./student-base";

export class GetStudentBase extends StudentBase {
    @AutoMap()
    id:string;
}