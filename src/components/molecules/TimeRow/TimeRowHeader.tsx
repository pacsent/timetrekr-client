import clsx from 'clsx';
import TextField from 'components/atoms/Input/Input';
import styles from './TimeRow.module.scss';

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

function TimeRowHeader({ className, data }: Props) {
  return (
    <div className={clsx(className && className, styles.TimeRow)}>
      <div>{data?.taskNameLabel} </div>
      <div className={styles.alignCenter}>{data?.startTimeLabel} </div>
      <div className={styles.alignCenter}>{data?.endTimeLabel} </div>
      <div className={styles.alignCenter}>{data?.diffLabel} </div>
    </div>
  );
}

export default TimeRowHeader;
