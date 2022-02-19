import { AutomapperProfile, InjectMapper } from "@automapper/nestjs";
import { Mapper } from "@automapper/types";
import { Injectable } from "@nestjs/common";
import { Student } from "@infrastructure/database/student/student.entity";
import { GetStudentResponse } from "./get-student-response";

@Injectable()
export class GetStudentMapper extends AutomapperProfile {
  constructor(@InjectMapper() mapper: Mapper) {
    super(mapper);
  }

  mapProfile() {
    return (mapper: Mapper) => {
      mapper.createMap(Student,GetStudentResponse );

    };
  }
}