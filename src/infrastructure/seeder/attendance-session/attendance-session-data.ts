import { AttendanceSession } from '@infrastructure/database/attendance-session/attendance-session.entity';

export const DATA: Partial<AttendanceSession>[] = [
  {
    id: 'FN',
    name: 'Fore Noon'
  },
  {
    id: 'AN',
    name: 'After Noon'
  }
];
