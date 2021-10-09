import TimeEntry from 'components/molecules/TimeEntry/TimeEntry';
import styles from './DayView.module.scss';
import TimeEntryHeader from 'components/molecules/TimeEntry/TimeEntryHeader';
import { DayViewData, TimeEntryData } from 'types/time';
import { useEffect, useState } from 'react';
import clsx from 'clsx';
import { DateTime } from 'luxon';
import { minsToTime } from 'utils/functions';

interface Props {
  className?: string;
  data?: DayViewData;
  showHeader?: boolean;
}

function DayView({ className, data, showHeader }: Props) {
  const dt = DateTime.fromISO(data?.date || '');
  return (
    <div className={clsx(className && className, styles.main)}>
      <div className={styles.header}>
        <div>
          {dt.toLocaleString({ ...DateTime.DATE_MED, weekday: 'short' })}
        </div>
        <div>{/* Target: {data?.target} */}</div>
        <div className={styles.alignRight}>{minsToTime(data?.total)}</div>
      </div>
      {showHeader && (
        <TimeEntryHeader
          data={{
            taskNameLabel: 'Task',
            startTimeLabel: 'Start',
            endTimeLabel: 'Stop',
            diffLabel: 'Diff',
          }}
        />
      )}
      {data?.entries?.map((entry: TimeEntryData, i) => (
        <TimeEntry key={'entry' + i} data={entry} />
      ))}
    </div>
  );
}

export default DayView;
