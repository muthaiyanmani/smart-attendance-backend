import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { AttendanceSession } from '@infrastructure/database/attendance-session/attendance-session.entity';
import { Repository } from 'typeorm';
import { DATA } from './attendance-session-data';

@Injectable()
export class AttendanceSessionSeederService {
    constructor(
        @InjectRepository(AttendanceSession)
        private readonly repository: Repository<AttendanceSession>,
      ) {}
    
      createAttendanceSession(): Promise<any>[] {
        return DATA.map(async data => await this.repository.save(this.repository.create(data)));
      }
}
