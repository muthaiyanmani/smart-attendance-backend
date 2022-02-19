import { AutomapperProfile, InjectMapper } from "@automapper/nestjs";
import { Mapper } from "@automapper/types";
import { Injectable } from "@nestjs/common";
import { StudentPagedModel } from "@infrastructure/database/student/student-paged-model";
import { Student } from "@infrastructure/database/student/student.entity";
import { GetStudentBase } from "../get-student-base";
import { GetStudentListResponse } from "./get-student-list-response";

@Injectable()
export class GetStudentListMapper extends AutomapperProfile {
  constructor(@InjectMapper() mapper: Mapper) {
    super(mapper);
  }

  mapProfile() {
    return (mapper: Mapper) => {
      mapper.createMap(Student, GetStudentBase);

      mapper.createMap(StudentPagedModel, GetStudentListResponse);
    };
  }
}


