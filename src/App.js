import logo from "./logo.svg";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import "./App.css";
import Homepage from "./Pages/Homepage/Homepage";
import Team from "./Pages/Team/Team";
import Projects from "./Pages/Projects/Projects";
import Chapters from "./Pages/Chapters/Chapters";
import Apply from "./Pages/Apply/Apply";
import Students from "./Pages/Apply/Students";
import Nonprofits from "./Pages/Apply/Nonprofits";
import Alumni from "./Pages/Alumni/Alumni";
import Navbar from "./Components/NavBar/NavBar";
import Footer from "./Components/Footer/Footer";
import "bootstrap/dist/css/bootstrap.css";
import { Container } from 'react-bootstrap';

function App() {
  return (
    <>
      <div className='page'>
        <Navbar />
        <Switch>
          <Route exact path='/'>
            <Homepage />
          </Route>
          <Route exact path='/team'>
            <Team />
          </Route>
          <Route path='/chapters'>
            <Chapters />
          </Route>
          <Route path='/projects'>
            <Projects />
          </Route>
          <Route exact path='/apply'>
            <Apply />
          </Route>
          <Route path='/apply/students'>
            <Students />
          </Route>
          <Route path='/apply/nonprofits'>
            <Nonprofits />
          </Route>
          <Route path='/team/alumni'>
            <Alumni />
          </Route>
        </Switch>
      </div>
      <Footer />
    </>
  );
}

export default App;
