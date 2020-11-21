import logo from './logo.svg';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import './App.css';
import Homepage from './Pages/Homepage/Homepage';
import Team from './Pages/Team/Team';
import Projects from './Pages/Projects/Projects';
import Navbar from './NavBar/NavBar';

function App() {
  return (
    <Router>
      <div>
        <Navbar />
         <Switch>
          <Route path="/home">
            <Homepage />
          </Route>
          <Route path="/team">
            <Team />
          </Route>
          <Route path="/projects">
            <Projects />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
