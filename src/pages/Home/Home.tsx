import styles from './Home.module.scss';
import MonthView from 'components/organisms/MonthView/MonthView';
import { useAppContext } from 'context';
import TimeButton from 'components/organisms/TimeButton/TimeButton';
import { useEffect } from 'react';
import { MonthViewData } from 'types/time';
import { formatYM } from 'utils/functions';

export default function Home() {
  const { jsonData } = useAppContext();

  useEffect(() => {
    console.log({ jsonDataHome: jsonData });
  }, [jsonData]);

  function handleDataChange(data?: MonthViewData) {
    console.log('data changed: ', data);
    localStorage.setItem(
      formatYM(data?.year, data?.month),
      JSON.stringify(data)
    );
  }

  return (
    <div className={styles.main}>
      <div className={styles.TimeInputsWrapper}>
        <MonthView data={jsonData} onDataChange={handleDataChange} />
        <TimeButton />
      </div>
    </div>
  );
}
