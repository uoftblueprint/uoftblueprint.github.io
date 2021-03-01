import logo from './logo.svg';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";
import './App.css';
import Homepage from './Pages/Homepage/Homepage';
import Team from './Pages/Team/Team';
import Projects from './Pages/Projects/Projects';
import Chapters from './Pages/Chapters/Chapters';
import Apply from './Pages/Apply/Apply';
import Students from './Pages/Apply/Students';
import Nonprofits from './Pages/Apply/Nonprofits';
import Navbar from './Components/NavBar/NavBar';
import Footer from './Components/Footer/Footer'
import 'bootstrap/dist/css/bootstrap.css';

function App() {
  return (
    <div className="page">
      <div className="content">
          <Navbar />
          <Switch>
            <Route exact path="/">
              <Homepage />
            </Route>
            <Route path="/team">
              <Team />
            </Route>
            <Route path="/chapters">
              <Chapters />
            </Route>
            <Route path="/projects">
              <Projects />
            </Route>
            <Route exact path="/apply">
              <Apply />
            </Route>
            <Route path="/apply/students">
              <Students />
            </Route>
            <Route path="/apply/nonprofits">
              <Nonprofits />
            </Route>
          </Switch>
        </div>
      { window.innerWidth > 480 ? <Footer /> : null }
    </div>
  );
}

export default App;
