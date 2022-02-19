import { AttendanceStatus } from '@infrastructure/database/attendance-status/attendance-status.entity';

export const DATA: Partial<AttendanceStatus>[] = [
  {
    id: 'NONE',
    name: 'None'
  },
  {
    id: 'PRESENT',
    name: 'Present'
  },
  {
    id: 'ABSENT',
    name: 'Absent'
  }
];
