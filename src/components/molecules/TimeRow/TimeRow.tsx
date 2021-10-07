import clsx from 'clsx';
import TextField from 'components/atoms/Input/Input';
import styles from './TimeRow.module.scss';

interface Props {
  className?: string;
  data?: { taskName?: string; startTime?: string; endTime?: string };
  isHeader?: boolean;
}

function TimeRow({ className, data, isHeader }: Props) {
  return (
    <div className={clsx(className && className, styles.TimeRow)}>
      <TextField defaultValue={data?.taskName} />
      <TextField
        className={styles.alignCenter}
        defaultValue={data?.startTime}
      />
      <TextField className={styles.alignCenter} defaultValue={data?.endTime} />
      <div className={styles.alignCenter}>01:00</div>
    </div>
  );
}

export default TimeRow;
