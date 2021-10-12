import clsx from 'clsx';
import TextField from 'components/atoms/TextField/TextField';
import { useMonthContext } from 'components/organisms/MonthView/monthContext';
import React, { useEffect, useState } from 'react';
import { TimeEntryData, DayViewData } from 'types/time';
import {
  deepClone,
  diffToMins,
  getTs,
  minsToTime,
  recalculateMonth,
  timeToTs,
  tsToTime,
} from 'utils/functions';
import styles from './TimeEntry.module.scss';

interface Props {
  className?: string;
  data?: TimeEntryData;
  date?: string;
}

function TimeEntry({ className, data, date }: Props) {
  const [diff, setDiff] = useState<number | undefined>();
  const { monthData, setMonthData } = useMonthContext();

  console.log('timeentry');
  useEffect(() => {
    setDiff(diffToMins(data?.startTime, data?.endTime || getTs()));
  }, [data]);

  function handleBlur(
    e: React.ChangeEvent<HTMLInputElement>,
    field: 'taskName' | 'startTime' | 'endTime'
  ) {
    const newMonthData = deepClone(monthData);
    newMonthData?.days?.forEach((day: DayViewData) => {
      if (day.date === date) {
        day.entries?.forEach((entry: TimeEntryData) => {
          if (entry.id === data?.id) {
            if (field === 'startTime') {
              entry[field] = timeToTs(e.target.value, date);
            } else if (field === 'endTime' && entry[field] !== ':') {
              entry[field] = timeToTs(e.target.value, date);
            } else {
              entry[field] = e.target.value;
            }
          }
        });
      }
    });

    setMonthData(recalculateMonth(newMonthData));
  }

  return (
    <div className={clsx(className, styles.main)}>
      <TextField
        defaultValue={data?.taskName}
        onBlur={(e) => handleBlur(e, 'taskName')}
      />
      <TextField
        className={styles.alignCenter}
        defaultValue={tsToTime(data?.startTime)}
        format="time"
        onBlur={(e) => handleBlur(e, 'startTime')}
        align="center"
      />
      <TextField
        className={styles.alignCenter}
        defaultValue={tsToTime(data?.endTime)}
        format="time"
        onBlur={(e) => handleBlur(e, 'endTime')}
        align="center"
      />
      <div className={clsx(styles.readOnly, styles.alignRight)}>
        {minsToTime(diff)}
      </div>
    </div>
  );
}

export default TimeEntry;
