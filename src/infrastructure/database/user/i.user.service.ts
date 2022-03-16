import { IBaseService } from "@common/i.base.service";
import { SortingDirection } from "@common/sorting-direction";
import { UserPagedModel } from "./user-paged-model";
import { User } from "./user.entity";

export interface IUserService extends IBaseService<User> {
    getUserList(
        pageNumber: number,
        pageSize: number,
        orderBy: SortingDirection,
        orderByPropertyName: string
    ): Promise<UserPagedModel>;

    signIn(username: string, password: string): Promise<User>;

}