import { IBaseService } from '@common/i.base.service';
import { SortingDirection } from '@common/sorting-direction';
import { StudentPagedModel } from './student-paged-model';
import { Student } from './student.entity';
import { StudentFilter } from './student.filter';

export interface IStudentService extends IBaseService<Student> {
  getStudentList(
    pageNumber: number,
    pageSize: number,
    orderBy: SortingDirection,
    orderByPropertyName: string,
    filter?: StudentFilter
  ): Promise<StudentPagedModel>;
}
