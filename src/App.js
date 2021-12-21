import './assets/css/base.css';
import './assets/css/grid.css';
import './assets/css/style.css';
import './assets/css/responsive.css';
import Header from './components/Header';
import Footer from './components/Footer';

import { BrowserRouter as Router } from 'react-router-dom';
import RouteRoute from './config/Routes'

function App() {
  return (
    <Router>
      <div className="app">
        <Header />
        <RouteRoute />
        <Footer />
      </div>

    </Router>

  );
}

export default App;
