import './App.scss';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import NavBar from 'components/organisms/NavBar/NavBar';
import Home from 'pages/Home/Home';
import { AppContext } from 'context';
import { useEffect, useState } from 'react';
import { monthViewData } from 'utils/constants';
import { MonthData } from 'types/time';
import { getYearMonth, initMonthData, validateJson } from 'utils/functions';
import Footer from 'components/organisms/Footer/Footer';

function App() {
  let _ymData = validateJson(localStorage.getItem(getYearMonth())) as MonthData;
  if (!_ymData) {
    _ymData = initMonthData();
    localStorage.setItem(getYearMonth(), JSON.stringify(_ymData));
  }
  const [jsonData, setJsonData] = useState<MonthData | undefined>(_ymData);

  return (
    <AppContext.Provider
      value={{
        jsonData,
        setJsonData,
      }}
    >
      <Router>
        <NavBar />
        <Switch>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
        <Footer />
      </Router>
    </AppContext.Provider>
  );
}

export default App;
