import { AutoMap } from "@automapper/classes";
import { PagedResponse } from "@common/paged-response";
import { User } from "./user.entity";

export class UserPagedModel extends PagedResponse {
    @AutoMap(()=>User)
    items:User[];
}