import styles from './MonthView.module.scss';
import TimeEntryHeader from 'components/molecules/TimeEntry/TimeEntryHeader';
import { DayData, MonthData } from 'types/time';
import { useEffect, useState } from 'react';
import DayView from '../DayView/DayView';
import { recalculateMonth } from 'utils/functions';
import clsx from 'clsx';
import { MonthContext } from './monthContext';

interface Props {
  className?: string;
  data?: MonthData;
  onDataChange: (data?: MonthData) => void;
}

function MonthView({ className, data, onDataChange: updateData }: Props) {
  const [monthData, setMonthData] = useState<MonthData | undefined>(data);

  useEffect(() => {
    setMonthData(data);
  }, [data]);

  useEffect(() => {
    updateData(monthData);
  }, [monthData]);

  return (
    <MonthContext.Provider value={{ monthData, setMonthData }}>
      <div className={clsx(className, styles.main)}>
        <TimeEntryHeader
          data={{
            taskNameLabel: 'Task',
            startTimeLabel: 'Start',
            endTimeLabel: 'Stop',
            diffLabel: 'Total',
          }}
        />
        {monthData?.days?.map((day: DayData, index) => (
          <DayView key={'day' + index} data={day} />
        ))}
      </div>
    </MonthContext.Provider>
  );
}

export default MonthView;
