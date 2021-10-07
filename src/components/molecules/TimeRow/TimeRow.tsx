import clsx from 'clsx';
import TextField from 'components/atoms/Input/Input';
import { useEffect, useState } from 'react';
import { TimeRowData } from 'types/time';
import styles from './TimeRow.module.scss';

interface Props {
  className?: string;
  data?: TimeRowData;
}

function TimeRow({ className, data }: Props) {
  const [some, setSome] = useState<string | undefined>();
  useEffect(() => {
    setSome('whaaaaa');
  }, []);

  return (
    <div className={clsx(className && className, styles.TimeRow)}>
      <TextField defaultValue={data?.taskName} />
      <TextField
        className={styles.alignCenter}
        defaultValue={data?.startTime}
      />
      <TextField className={styles.alignCenter} defaultValue={data?.endTime} />
      <div className={styles.alignCenter}>{data?.diff}</div>
    </div>
  );
}

export default TimeRow;
