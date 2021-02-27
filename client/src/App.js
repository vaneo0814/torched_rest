import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Navigation from './components/nav/nav.js';
import Footer from './components/footer/footer.js';
import Home from "./pages/home.js";
import About from "./pages/about.js";
import Careers from "./pages/careers.js";
import Contact from "./pages/contactus.js";
import Chefs from "./pages/chefs.js";
import Menu from "./pages/food";
import Events from "./pages/events.js"
import Safety from "./pages/safety.js";
import Login from "./pages/login.js";
import Location from "./pages/location.js";
import AddNewItem from "./pages/addnewitem";
import UpdateItem from "./pages/updateItem";
import './App.css';
import { StoreProvider } from './utils/GLOBALSTATE';


function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <StoreProvider>
          <Navigation />
          <Switch>
            <Route exact path="/"
              component={Home} />
            <Route path="/about"
              component={About} />
            <Route path="/careers"
              component={Careers} />
            <Route path="/contact"
              component={Contact} />
            <Route path="/chefs"
              component={Chefs} />
            <Route path="/events"
              component={Events} />
            <Route path="/safety"
              component={Safety} />
            <Route path="/login"
              component={Login} />
            <Route path="/menu"
              component={Menu} />
            <Route path="/location"
              component={Location} />
            <Route path="/additem"
              component={AddNewItem} />
            <Route path="/updateitem"
              component={UpdateItem} />

          </Switch>
          <Footer />
        </StoreProvider>
      </div>
    </BrowserRouter>
  );
}

export default App;


