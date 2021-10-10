import { MonthViewData } from 'types/time';

export const monthViewData: MonthViewData = {
  year: 2021,
  month: 9,
  days: [
    {
      date: '2021-09-01',
      target: '08:00',
      entries: [
        {
          id: '1200',
          taskName: 'Ticket 211',
          startTime: '2021-09-01T10:00',
          endTime: '2021-09-01T11:00',
        },
        {
          id: '1201',
          taskName: 'Ticket 256',
          startTime: '2021-09-01T14:00',
          endTime: '2021-09-01T16:00',
        },
      ],
    },
    {
      date: '2021-09-02',
      target: '08:00',
      entries: [
        {
          id: '1202',
          taskName: 'Ticket 233',
          startTime: '2021-09-02T10:00',
          endTime: '2021-09-02T12:00',
        },
        {
          id: '1203',
          taskName: 'Ticket 296',
          startTime: '2021-09-02T14:30',
          endTime: '2021-09-02T17:00',
        },
      ],
    },
  ],
};
