import Button from 'components/atoms/Button/Button';
import styles from './TimeButton.module.scss';
import { DayViewData, MonthViewData } from 'types/time';
import { useEffect, useState } from 'react';
import { DateTime } from 'luxon';
import { useAppContext } from 'context';
import { FaPlay, FaStop } from 'react-icons/fa';
import { nanoid } from 'nanoid';
import { getTs } from 'utils/functions';

function TimeButton() {
  const { jsonData, setJsonData } = useAppContext();
  const [started, setStarted] = useState(false);

  function toggleButton() {
    if (started) {
      stopTime();
      setStarted(false);
    } else {
      startTime();
      setStarted(true);
    }
  }

  function startTime() {
    const dt = DateTime.now();
    const newEntry = {
      id: nanoid(),
      taskName: 'New Task',
      startTime: dt.toISO(),
      endTime: '',
    };
    const newJson: MonthViewData = JSON.parse(JSON.stringify(jsonData));
    let dayExists = false;
    newJson?.days?.forEach((day: DayViewData) => {
      if (day?.date === dt.toFormat('yyyy-MM-dd')) {
        day?.entries?.push(newEntry);
        dayExists = true;
      }
    });
    if (!dayExists) {
      const newDay: DayViewData = {
        date: dt.toFormat('yyyy-MM-dd'),
        entries: [newEntry],
      };
      newJson?.days?.push(newDay);
    }
    setJsonData(newJson);
  }

  function stopTime() {
    const newJson: MonthViewData = JSON.parse(JSON.stringify(jsonData));
    const currentDay = newJson?.days?.[newJson.days.length - 1];
    const currentEntry = currentDay?.entries?.[currentDay?.entries?.length - 1];
    console.log({ currentEntry });
    if (currentEntry) {
      currentEntry.endTime = getTs();
    }
    setJsonData(newJson);
  }

  return (
    <Button
      onClick={toggleButton}
      size="600"
      variant={started ? 'red' : 'primary'}
    >
      {started ? 'Stop' : 'Start'} {started ? <FaStop /> : <FaPlay />}
    </Button>
  );
}

export default TimeButton;
