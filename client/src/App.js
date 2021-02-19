import { BrowserRouter, Route } from 'react-router-dom';
import Navigation from './components/nav/nav.js';
import Footer from './components/footer/footer.js';
import Home from "./pages/home.js";
import About from "./pages/about.js";
import Careers from "./pages/careers.js";
import Contact from "./pages/contactus.js";
import Chefs from "./pages/chefs.js";
import Food from "./pages/food";
//import { StoreProvider } from "./utils/GlobalState";
import './App.css';
import { StoreProvider } from './utils/GLOBALSTATE';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <StoreProvider>
          <Navigation />
          {/* Routes  */}
          <Route exact path="/" component={Home} />
          <Route exact path="/about" component={About} />
          <Route exact path="/careers" component={Careers} />
          <Route exact path="/contact" component={Contact} />
          <Route exact path="/chefs" component={Chefs} />
          <Route exact path="/food" component={Food}/>
          <Footer />
        </StoreProvider>
      </div>
    </BrowserRouter>
  );
}

export default App;
