import { useEffect } from 'react';
import MonthView from 'components/organisms/MonthView/MonthView';
import TimeButton from 'components/organisms/TimeButton/TimeButton';
import { useAppContext } from 'context';
import { MonthData } from 'types/time';
import { formatYM } from 'utils/functions';
import styles from './Home.module.scss';

export default function Home() {
  const { jsonData, setJsonData } = useAppContext();

  function handleDataChange(data?: MonthData) {
    setJsonData(data);
    localStorage.setItem(
      formatYM(data?.year, data?.month),
      JSON.stringify(data),
    );
  }

  return (
    <div className={styles.main}>
      <div className={styles.TimeInputsWrapper}>
        <MonthView data={jsonData} onDataChange={handleDataChange} />
      </div>
    </div>
  );
}
