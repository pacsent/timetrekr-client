import clsx from 'clsx';
import TextField from 'components/atoms/TextField/TextField';
import { DateTime } from 'luxon';
import { useEffect, useState } from 'react';
import { TimeEntryData } from 'types/time';
import { diffToMins, minsToTime, tsToHour } from 'utils/functions';
import styles from './TimeEntry.module.scss';

interface Props {
  className?: string;
  data?: TimeEntryData;
}

function TimeEntry({ className, data }: Props) {
  const [diff, setDiff] = useState<number | undefined>();

  useEffect(() => {
    setDiff(
      diffToMins(data?.startTime, data?.endTime || DateTime.now().toISO())
    );
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
      <div className={styles.alignRight}>{minsToTime(diff)}</div>
    </div>
  );
}

export default TimeEntry;
