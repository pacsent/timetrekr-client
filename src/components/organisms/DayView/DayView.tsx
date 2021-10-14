import { useEffect, useState } from 'react';
import clsx from 'clsx';
import TimeEntry from 'components/molecules/TimeEntry/TimeEntry';
import TimeEntryHeader from 'components/molecules/TimeEntry/TimeEntryHeader';
import { DayData, TimeEntryData } from 'types/time';
import { getDateWithDay, minsToTime } from 'utils/functions';
import styles from './DayView.module.scss';

interface Props {
  className?: string;
  data?: DayData;
  showHeader?: boolean;
}

function DayView({ className, data, showHeader }: Props) {
  return (
    <div className={clsx(className, styles.main)}>
      <div className={styles.header}>
        <div>{getDateWithDay(data?.date)}</div>
        <div>{/* Target: {data?.target} */}</div>
        <div className={styles.alignRight}>{minsToTime(data?.total)}</div>
        <div />
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
        <TimeEntry key={`entry${i}`} data={entry} date={data?.date} />
      ))}
    </div>
  );
}

export default DayView;
