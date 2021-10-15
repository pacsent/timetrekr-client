import { useEffect, useState } from 'react';
import clsx from 'clsx';
import { FaTrash } from 'react-icons/fa';
import TextField from 'components/atoms/TextField/TextField';
import { useMonthContext } from 'components/organisms/MonthView/monthContext';
import { TimeEntryData, EntryField } from 'types/time';
import {
  diffToMins,
  getTs,
  minsToTime,
  tsToTime,
  updateMonthData,
} from 'utils/functions';
import styles from './TimeEntry.module.scss';
import TimeField from '../TimeField/TimeField';

interface Props {
  className?: string;
  data?: TimeEntryData;
  date?: string;
}

function TimeEntry({ className, data, date }: Props) {
  const [diff, setDiff] = useState<number | undefined>();
  const { monthData, setMonthData } = useMonthContext();

  useEffect(() => {
    setDiff(diffToMins(data?.startTime, data?.endTime || getTs()));
  }, [data]);

  function handleBlur(val: string, field: EntryField) {
    const newMonthData = updateMonthData(val, field, monthData, data, date);

    setMonthData(newMonthData);
  }

  function deleteEntry() {
    alert('Premium Feature!');
  }

  return (
    <div className={clsx(className, styles.main)}>
      <TextField
        defaultValue={data?.taskName}
        onBlur={(val) => handleBlur(val, 'taskName')}
      />
      {/* <TextField
        className={styles.alignCenter}
        defaultValue={tsToTime(data?.startTime)}
        format="time"
        onBlur={(val) => handleBlur(val, 'startTime')}
        align="center"
      /> */}
      {/* <TextField
        className={styles.alignCenter}
        defaultValue={tsToTime(data?.endTime)}
        format="time"
        onBlur={(val) => handleBlur(val, 'endTime')}
        align="center"
      /> */}
      <TimeField
        className={styles.alignCenter}
        defaultValue={tsToTime(data?.startTime)}
        onBlur={(val) => handleBlur(val, 'startTime')}
      />
      <TimeField
        className={styles.alignCenter}
        defaultValue={tsToTime(data?.endTime)}
        onBlur={(val) => handleBlur(val, 'endTime')}
      />
      <div className={styles.diff}>{minsToTime(diff)}</div>
      <div onClick={deleteEntry} className={styles.deleteButton}>
        <FaTrash />
      </div>
    </div>
  );
}

export default TimeEntry;
