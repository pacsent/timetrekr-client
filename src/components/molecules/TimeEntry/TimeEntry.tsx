import clsx from 'clsx';
import TextField from 'components/atoms/TextField/TextField';
import { useMonthContext } from 'components/organisms/MonthView/monthContext';
import React, { useEffect, useState } from 'react';
import { FaTrash } from 'react-icons/fa';
import { TimeEntryData, DayData, EntryField } from 'types/time';
import {
  deepClone,
  diffToMins,
  getTs,
  minsToTime,
  recalculateMonth,
  timeToTs,
  tsToTime,
  updateMonthData,
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
    field: EntryField
  ) {
    const newMonthData = updateMonthData(
      e.target.value,
      field,
      monthData,
      data,
      date
    );

    setMonthData(newMonthData);
  }

  function deleteEntry() {
    console.log('delete data:  ', data);
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
      <div className={styles.diff}>{minsToTime(diff)}</div>
      <div onClick={deleteEntry} className={styles.deleteButton}>
        <FaTrash />
      </div>
    </div>
  );
}

export default TimeEntry;
