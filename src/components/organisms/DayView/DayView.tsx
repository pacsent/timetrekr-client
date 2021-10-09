import TimeEntry from 'components/molecules/TimeEntry/TimeEntry';
import styles from './DayView.module.scss';
import TimeEntryHeader from 'components/molecules/TimeEntry/TimeEntryHeader';
import { DayViewData, TimeEntryData } from 'types/time';
import { useEffect, useState } from 'react';
import clsx from 'clsx';

interface Props {
  className?: string;
  data?: DayViewData;
  showHeader?: boolean;
}

function DayView({ className, data, showHeader }: Props) {
  return (
    <div className={clsx(className && className, styles.main)}>
      <div className={styles.header}>{data?.date}</div>
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
        <TimeEntry key={'erer' + i} data={entry} />
      ))}
    </div>
  );
}

export default DayView;
