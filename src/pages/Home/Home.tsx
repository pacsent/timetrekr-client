import Button from 'components/atoms/Button/Button';
import styles from './Home.module.scss';
import { DayViewData, MonthViewData } from 'types/time';
import MonthView from 'components/organisms/MonthView/MonthView';
import { useEffect, useState } from 'react';

interface Props {
  className?: string;
}

const jsonData: MonthViewData = {
  year: 2021,
  month: 9,
  days: [
    {
      date: '2021-09-01',
      total: '02:00',
      target: '08:00',
      rows: [
        {
          taskName: 'Ticket 211',
          startTime: '2021-09-01 10:00',
          endTime: '2021-09-01 11:00',
          diff: '01:00',
        },
        {
          taskName: 'Ticket 256',
          startTime: '2021-09-01 11:00',
          endTime: '2021-09-01 12:00',
          diff: '01:00',
        },
      ],
    },
    {
      date: '2021-09-02',
      total: '04:30',
      target: '08:00',
      rows: [
        {
          taskName: 'Ticket 233',
          startTime: '2021-09-01 10:00',
          endTime: '2021-09-01 12:00',
          diff: '02:00',
        },
        {
          taskName: 'Ticket 296',
          startTime: '2021-09-01 14:30',
          endTime: '2021-09-01 17:00',
          diff: '02:30',
        },
      ],
    },
  ],
};
export default function Home() {
  const [data, setData] = useState<MonthViewData>(jsonData);
  useEffect(() => {
    console.log({ data });
  }, [data]);

  function addTime() {
    const newEntry = {
      taskName: 'Ticket 233',
      startTime: '2021-09-01 10:00',
      endTime: '2021-09-01 12:00',
      diff: '02:00',
    };
    const newJson: MonthViewData = JSON.parse(JSON.stringify(data));
    newJson?.days?.forEach((day: DayViewData) => {
      if (day?.date === '2021-09-01') {
        day?.rows?.push(newEntry);
      }
    });
    setData(newJson);
  }
  return (
    <div className={styles.Home}>
      <div className={styles.TimeInputsWrapper}>
        <MonthView data={data} />

        <Button onClick={addTime} size="700">
          Start
        </Button>
      </div>
    </div>
  );
}
