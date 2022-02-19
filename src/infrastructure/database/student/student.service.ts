import { InjectRepository } from '@nestjs/typeorm';
import { BaseService } from '@common/base.service';
import { SortingDirection } from '@common/sorting-direction';
import { Repository } from 'typeorm';
import { IStudentService } from './i.student.service';
import { StudentPagedModel } from './student-paged-model';
import { Student } from './student.entity';
import { StudentFilter } from './student.filter';
import { nameof } from '@common/utils/nameof';

export class StudentService
  extends BaseService<Repository<Student>, Student>
  implements IStudentService
{
  constructor(
    @InjectRepository(Student)
    protected readonly repository: Repository<Student>
  ) {
    super(repository);
  }

  public async getStudentList(
    pageNumber: number,
    pageSize: number,
    orderBy: SortingDirection,
    orderByPropertyName: string,
    filter?: StudentFilter
  ): Promise<StudentPagedModel> {
    const queryBuilder = this.createQueryBuilder('s');

    if (filter.standardId) {
      queryBuilder.andWhere(
        `s.${nameof<Student>((x) => x.standardId)} =:standardId`,
        {
          standardId: filter.standardId
        }
      );
    }
    const result = await this.paged(
      queryBuilder,
      pageNumber,
      pageSize,
      orderBy,
      orderByPropertyName
    );
    return result;
  }
}
