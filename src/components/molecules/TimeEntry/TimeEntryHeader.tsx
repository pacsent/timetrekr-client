import clsx from 'clsx';
import styles from './TimeEntry.module.scss';

interface Props {
  className?: string;
  data?: {
    taskNameLabel?: string;
    startTimeLabel?: string;
    endTimeLabel?: string;
    diffLabel?: string;
  };
  isHeader?: boolean;
}

function TimeEntryHeader({ className, data }: Props) {
  return (
    <div className={clsx(className && className, styles.main)}>
      <div>{data?.taskNameLabel} </div>
      <div className={styles.alignCenter}>{data?.startTimeLabel} </div>
      <div className={styles.alignCenter}>{data?.endTimeLabel} </div>
      <div className={styles.alignCenter}>{data?.diffLabel} </div>
    </div>
  );
}

export default TimeEntryHeader;
