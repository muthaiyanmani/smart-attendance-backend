import { ignore, mapFrom } from "@automapper/core";
import { AutomapperProfile, InjectMapper } from "@automapper/nestjs";
import { Mapper } from "@automapper/types";
import { Injectable } from "@nestjs/common";
import { Student } from "@infrastructure/database/student/student.entity";
import { UpdateStudentRequest } from "./update-student-request";

@Injectable()
export class UpdateStudentMapper extends AutomapperProfile {
  constructor(@InjectMapper() mapper: Mapper) {
    super(mapper);
  }

  mapProfile() {
    return (mapper: Mapper) => {
      mapper.createMap(UpdateStudentRequest, Student)
      .forMember(
        (destination) => destination.id,
        ignore()
      );

    };
  }
}