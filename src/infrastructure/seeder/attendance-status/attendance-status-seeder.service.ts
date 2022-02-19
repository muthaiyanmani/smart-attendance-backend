import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { AttendanceStatus } from '@infrastructure/database/attendance-status/attendance-status.entity';
import { Repository } from 'typeorm';
import { DATA } from './attendance-status-data';

@Injectable()
export class AttendanceStatusSeederService {
    constructor(
        @InjectRepository(AttendanceStatus)
        private readonly repository: Repository<AttendanceStatus>,
      ) {}
    
      createAttendanceStatus(): Promise<any>[] {
        return DATA.map(async data => await this.repository.save(this.repository.create(data)));
      }
}
