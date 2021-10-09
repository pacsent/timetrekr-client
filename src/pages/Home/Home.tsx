import styles from './Home.module.scss';
import MonthView from 'components/organisms/MonthView/MonthView';
import { useAppContext } from 'context';
import TimeButton from 'components/organisms/TimeButton/TimeButton';

export default function Home() {
  const { jsonData } = useAppContext();
  return (
    <div className={styles.main}>
      <div className={styles.TimeInputsWrapper}>
        <MonthView data={jsonData} />

        <TimeButton />
      </div>
    </div>
  );
}
