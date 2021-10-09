import clsx from 'clsx';
import TextField from 'components/atoms/TextField/TextField';
import { useEffect, useState } from 'react';
import { TimeEntryData } from 'types/time';
import { tsToHour } from 'utils/functions';
import styles from './TimeEntry.module.scss';

interface Props {
  className?: string;
  data?: TimeEntryData;
}

function TimeEntry({ className, data }: Props) {
  useEffect(() => {
    console.log({ timeEntryData: data });
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
      />
      <div className={styles.alignCenter}>{data?.diff}</div>
    </div>
  );
}

export default TimeEntry;
