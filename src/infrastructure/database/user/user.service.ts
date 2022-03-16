import { InjectRepository } from "@nestjs/typeorm";
import { BaseService } from "@common/base.service";
import { SortingDirection } from "@common/sorting-direction";
import { Repository } from "typeorm";
import { IUserService } from "./i.user.service";
import { UserPagedModel } from "./user-paged-model";
import { User } from "./user.entity";
import { nameof } from "@common/utils/nameof";
import { HttpException, HttpStatus } from "@nestjs/common";

export class UserService extends BaseService<Repository<User>, User> implements IUserService {
    constructor(
        @InjectRepository(User) protected readonly repository: Repository<User>
    ) {
        super(repository);
    }

    public async getUserList(
        pageNumber: number,
        pageSize: number,
        orderBy: SortingDirection,
        orderByPropertyName: string
    ): Promise<UserPagedModel> {

        const queryBuilder = this.createQueryBuilder('p');

        const result = await this.paged(queryBuilder,
            pageNumber,
            pageSize,
            orderBy,
            orderByPropertyName
        );
        return result;
    }

    async signIn(username: string, password: string): Promise<User> {
        const user = await this.createQueryBuilder("u")
          .andWhere(`u.${nameof<User>((x) => x.username)}=:username`, {
            username: username,
          })
          .getOne();
    
        if (!user || !(await user.comparePassword(password))) {
          throw new HttpException(
            "Invalid username/password",
            HttpStatus.BAD_REQUEST
          );
        }
        return user;
      }

}