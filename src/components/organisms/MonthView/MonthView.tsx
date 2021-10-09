import TimeEntry from 'components/molecules/TimeEntry/TimeEntry';
import styles from './MonthView.module.scss';
import TimeEntryHeader from 'components/molecules/TimeEntry/TimeEntryHeader';
import { DayViewData, MonthViewData, TimeEntryData } from 'types/time';
import { useEffect, useState } from 'react';
import DayView from '../DayView/DayView';
import { recalculateMonth } from 'utils/functions';

interface Props {
  className?: string;
  data?: MonthViewData;
}

function MonthView({ className, data }: Props) {
  const [monthData, setMonthData] = useState<MonthViewData | undefined>(data);
  useEffect(() => {
    setMonthData(recalculateMonth(data));
    console.log({ data });
  }, [data]);

  return (
    <div className={styles.main}>
      <TimeEntryHeader
        data={{
          taskNameLabel: 'Task',
          startTimeLabel: 'Start',
          endTimeLabel: 'Stop',
          diffLabel: 'Total',
        }}
      />
      {data?.days?.map((day: DayViewData, index) => (
        <DayView key={'day' + index} data={day} />
      ))}
    </div>
  );
}

export default MonthView;
