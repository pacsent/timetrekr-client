import clsx from 'clsx';
import TextField from 'components/atoms/TextField/TextField';
import { DateTime } from 'luxon';
import { useEffect, useState } from 'react';
import { TimeEntryData } from 'types/time';
import { tsToHour } from 'utils/functions';
import styles from './TimeEntry.module.scss';

interface Props {
  className?: string;
  data?: TimeEntryData;
}

function TimeEntry({ className, data }: Props) {
  const [diff, setDiff] = useState();

  useEffect(() => {
    const start = DateTime.fromISO(data?.startTime || '');
    const end = DateTime.fromISO(data?.endTime || '');
    const dif = end.diff(start, 'minutes');
    console.log({ timeEntryData: data, start, end, dif });
  }, [data]);

  return (
    <div className={clsx(className && className, styles.main)}>
      <TextField defaultValue={data?.taskName} />
      <TextField
        className={styles.alignCenter}
        defaultValue={tsToHour(data?.startTime)}
        format="time"
      />
      <TextField
        className={styles.alignCenter}
        defaultValue={tsToHour(data?.endTime)}
        format="time"
      />
      <div className={styles.alignCenter}>{data?.diff}</div>
    </div>
  );
}

export default TimeEntry;
