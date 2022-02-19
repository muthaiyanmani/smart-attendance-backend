import { AutomapperProfile, InjectMapper } from "@automapper/nestjs";
import { Mapper } from "@automapper/types";
import { Injectable } from "@nestjs/common";
import { AttendanceSessionPagedModel } from "@infrastructure/database/attendance-session/attendance-session-paged-model";
import { AttendanceSession } from "@infrastructure/database/attendance-session/attendance-session.entity";
import { GetAttendanceSessionBase } from "../get-attendance-session-base";
import { GetAttendanceSessionListResponse } from "./get-attendance-session-list-response";

@Injectable()
export class GetAttendanceSessionListMapper extends AutomapperProfile {
  constructor(@InjectMapper() mapper: Mapper) {
    super(mapper);
  }

  mapProfile() {
    return (mapper: Mapper) => {
      mapper.createMap(AttendanceSession, GetAttendanceSessionBase);

      mapper.createMap(AttendanceSessionPagedModel, GetAttendanceSessionListResponse);
    };
  }
}


