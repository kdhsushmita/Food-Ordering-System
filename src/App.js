import { BrowserRouter as Router, Route, Switch } from 'react-router-dom/cjs/react-router-dom.min';
import './App.css';
import NavBar from './Components/NavBar';
import About from './Pages/About';
import Contact from "./Pages/Contact";
import Menu from "./Pages/Menu";
import Home from './Pages/Home';
import Footer from './Components/Footer';

function App() {
  return (
    <>
      <Router>
        <NavBar />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/about">
            <About />
          </Route>
          <Route exact path="/contact">
            <Contact />
          </Route>
          <Route exact path="/menu">
            <Menu />
          </Route>
        </Switch>
        <Footer />
      </Router>
    </>
  );
}

export default App;
