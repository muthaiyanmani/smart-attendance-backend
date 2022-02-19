import { AutomapperProfile, InjectMapper } from "@automapper/nestjs";
import { Mapper } from "@automapper/types";
import { Injectable } from "@nestjs/common";
import { AttendanceStatusPagedModel } from "@infrastructure/database/attendance-status/attendance-status-paged-model";
import { AttendanceStatus } from "@infrastructure/database/attendance-status/attendance-status.entity";
import { GetAttendanceStatusBase } from "../get-attendance-status-base";
import { GetAttendanceStatusListResponse } from "./get-attendance-status-list-response";

@Injectable()
export class GetAttendanceStatusListMapper extends AutomapperProfile {
  constructor(@InjectMapper() mapper: Mapper) {
    super(mapper);
  }

  mapProfile() {
    return (mapper: Mapper) => {
      mapper.createMap(AttendanceStatus, GetAttendanceStatusBase);

      mapper.createMap(AttendanceStatusPagedModel, GetAttendanceStatusListResponse);
    };
  }
}


