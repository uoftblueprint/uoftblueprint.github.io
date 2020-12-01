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
import Navbar from './NavBar/NavBar';
import Footer from './Footer/Footer'
import 'bootstrap/dist/css/bootstrap.css';

function App() {
  return (
    <div className="page">
      <div className="content">
          <Navbar />
          <Switch>
            <Route exact path="/">
              <Redirect to="/home" />
            </Route>
            {/* <Route path="/home">
              <Homepage />
            </Route> */}
            <Route path="/team">
              <Team />
            </Route>
            <Route path="/projects">
              <Projects />
            </Route>
          </Switch>
        </div>
      { window.innerWidth > 480 ? <Footer /> : null }
    </div>
  );
}

export default App;
