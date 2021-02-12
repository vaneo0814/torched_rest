import { BrowserRouter, Route} from 'react-router-dom';
import Navigation from './components/nav/nav.js';
import Footer from './components/footer/footer.js';
import Home from "./pages/home.js"
import './App.css';

function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <Navigation/>
      {/* Routes  */}
      <Route exact path="/" component={Home} />
     
    <Footer/>
    </div>
    </BrowserRouter>
  );
}

export default App;
