import { BrowserRouter, Route, Switch} from 'react-router-dom';
import Navigation from './components/nav/nav.js';
import Footer from './components/footer/footer.js';
import Home from "./pages/home.js";
import About from "./pages/about.js";
import Careers from "./pages/careers.js";
import Contact from "./pages/contactus.js";
import Chefs from "./pages/chefs.js";
import Food from "./pages/food";
//import { StoreProvider } from "./utils/GlobalState";
import Events from "./pages/events.js"
import Safety from "./pages/safety.js";
import NoMatch from "./pages/nomatch.js";
import Login from "./pages/login.js";
import './App.css';
import { StoreProvider } from './utils/GLOBALSTATE';

function App() {
  return (
    <BrowserRouter>
    <div className="App">
    <StoreProvider>
      <Navigation/>
      {/* Routes  */}
      <Switch>
    <Route exact path="/">
      <Home />
    </Route>
    <Route path="/about">
      <About />
    </Route>
    <Route path="/careers">
      <Careers />
    </Route>
    <Route path="/contact">
      <Contact />
    </Route>
    <Route path="/chefs">
      <Chefs />
    </Route>
    <Route path="/events">
      <Events />
    </Route>
    <Route path="/safety">
      <Safety />
    </Route>
    <Route path="/login">
      <Login />
      <Route path="/menu">
        <Food />
      </Route>
    </Route>
  </Switch>
    <Footer/>
    </StoreProvider>
    </div>
    </BrowserRouter>
  );
}

export default App;


