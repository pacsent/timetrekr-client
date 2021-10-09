import './App.scss';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import NavBar from 'components/organisms/NavBar/NavBar';
import Home from 'pages/Home/Home';
import { AppContext } from 'context';
import { useState } from 'react';
import { monthViewData } from 'utils/constants';
import { MonthViewData } from 'types/time';

function App() {
  const [jsonData, setJsonData] = useState<MonthViewData | undefined>(
    monthViewData
  );
  return (
    <AppContext.Provider value={{ jsonData, setJsonData }}>
      <Router>
        <NavBar />
        <Switch>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </Router>
    </AppContext.Provider>
  );
}

export default App;
