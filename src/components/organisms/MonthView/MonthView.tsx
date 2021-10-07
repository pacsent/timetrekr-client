import TimeRow from 'components/molecules/TimeRow/TimeRow';
import styles from './MonthView.module.scss';
import TimeRowHeader from 'components/molecules/TimeRow/TimeRowHeader';
import { DayViewData, MonthViewData, TimeRowData } from 'types/time';
import { useEffect, useState } from 'react';

interface Props {
  className?: string;
  data?: MonthViewData;
}

function MonthView({ className, data }: Props) {
  return (
    <div className={styles.MonthView}>
      <div className={styles.TimeInputsWrapper}>
        <TimeRowHeader
          data={{
            taskNameLabel: 'Task',
            startTimeLabel: 'Start',
            endTimeLabel: 'Stop',
            diffLabel: 'Diff',
          }}
        />
        {data?.days?.map((day: DayViewData, index) => (
          <div key={'ef' + index}>
            {day.rows?.map((row: TimeRowData, i) => (
              <TimeRow
                key={'erer' + i}
                data={{
                  taskName: row.taskName,
                  startTime: row.startTime,
                  endTime: row.endTime,
                  diff: row.diff,
                }}
              />
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

export default MonthView;
