import "./App.scss"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import Home from "./pages/Home"
import NavBar from "./components/organisms/NavBar"

function App() {
  return (
    <Router>
      <NavBar />
      <Switch>
        <Route path="/">{Home}</Route>
      </Switch>
    </Router>
  )
}

export default App
