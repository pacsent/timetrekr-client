import TimeButton from '../TimeButton/TimeButton';
import styles from './NavBar.module.scss';

function NavBar() {
  return (
    <div className={styles.main}>
      Time Trekr
      {' '}
      <TimeButton variant="inverse" />
    </div>
  );
}
export default NavBar;
