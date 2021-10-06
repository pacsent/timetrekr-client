import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";

import styles from "./Home.module.scss";

function Home() {
  return (
    <div className={styles.Home}>
      <div>
        <Stack
          direction="column"
          spacing={2}
          className={styles.TimeInputsWrapper}
        >
          <Stack direction="row" spacing={2}>
            <span>Task</span>
            <span>Start</span>
            <span>Stop</span>
          </Stack>
          <Stack direction="row" spacing={2}>
            <TextField size="small" defaultValue="Ticket 322" />
            <TextField size="small" defaultValue="13:00" />
            <TextField size="small" defaultValue="15:00" />
          </Stack>
          <Stack direction="row" spacing={2}>
            <TextField size="small" placeholder="Task  name" />
            <TextField size="small" placeholder="00:00" />
            <TextField size="small" placeholder="00:00" />
          </Stack>
        </Stack>
      </div>
    </div>
  );
}

export default Home;
