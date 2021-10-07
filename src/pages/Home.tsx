import TimeRow from 'components/molecules/TimeRow/TimeRow';
import Button from 'components/atoms/Button/Button';
import styles from './Home.module.scss';
import TimeRowHeader from 'components/molecules/TimeRow/TimeRowHeader';

function Home() {
  return (
    <div className={styles.Home}>
      <div className={styles.TimeInputsWrapper}>
        <TimeRowHeader
          data={{
            taskNameLabel: 'Task',
            startTimeLabel: 'Start',
            endTimeLabel: 'Stop',
            diffLabel: 'Diff',
          }}
        />
        <TimeRow
          data={{
            taskName: 'Ticket 223',
            startTime: '10:00',
            endTime: '11:00',
          }}
        />

        <Button onClick={() => alert('whaaaa')} size="700">
          Start
        </Button>
      </div>
    </div>
  );
}

export default Home;
