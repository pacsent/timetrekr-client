import { useEffect, useState } from 'react';
import { DateTime } from 'luxon';
import { nanoid } from 'nanoid';
import { FaPlay, FaStop } from 'react-icons/fa';
import Button, { ButtonVariant } from 'components/atoms/Button/Button';
import { useAppContext } from 'context';
import { DayData } from 'types/time';
import { deepClone, getTs } from 'utils/functions';
import styles from './TimeButton.module.scss';

interface Props {
  variant?: ButtonVariant;
}

function TimeButton({ variant }: Props) {
  const { jsonData, setJsonData } = useAppContext();
  const [started, setStarted] = useState(false);

  useEffect(() => {
    scrollToBottom();
  }, []);

  function toggleButton() {
    if (started) {
      stopTime();
      setStarted(false);
      scrollToBottom();
    } else {
      startTime();
      setStarted(true);
      scrollToBottom();
    }
  }

  function scrollToBottom() {
    window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });
  }

  function startTime() {
    const newEntry = {
      id: nanoid(),
      taskName: 'New Task',
      startTime: getTs(),
      endTime: '',
    };
    const newJson = deepClone(jsonData);
    let dayExists = false;
    const dt = DateTime.now();
    newJson?.days?.forEach((day: DayData) => {
      if (day?.date === dt.toFormat('yyyy-MM-dd')) {
        day?.entries?.push(newEntry);
        dayExists = true;
      }
    });
    if (!dayExists) {
      const newDay: DayData = {
        date: dt.toFormat('yyyy-MM-dd'),
        entries: [newEntry],
      };
      newJson?.days?.push(newDay);
    }
    setJsonData(newJson);
  }

  function stopTime() {
    const newJson = deepClone(jsonData);
    const currentDay = newJson?.days?.[newJson.days.length - 1];
    const currentEntry = currentDay?.entries?.[currentDay?.entries?.length - 1];
    if (currentEntry) {
      currentEntry.endTime = getTs();
    }
    setJsonData(newJson);
  }

  return (
    <Button
      onClick={toggleButton}
      size="500"
      variant={started ? 'red' : variant ?? 'primary'}
    >
      {started ? 'Stop' : 'Start'} {started ? <FaStop /> : <FaPlay />}
    </Button>
  );
}

export default TimeButton;
