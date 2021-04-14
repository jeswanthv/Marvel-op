import './App.css';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Navbar from './components/Navbar';
import home from './pages/Home';
import feed from './pages/Feed';
import details from './pages/Details';
import comics from './pages/Comics';
import series from './pages/Series';
import about from './pages/about';

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <div className='container py-4 px-4 md:px-8 mx-auto'>
          <Route exact path='/' component={home} />
          <Route exact path='/feed' component={feed} />
          <Route exact path='/feed/:name/:id' component={details} />
          <Route exact path='/feed/:name/:id/comics' component={comics} />
          <Route exact path='/feed/:name/:id/series' component={series} />
          <Route exact path='/about' component={about} />
        </div>
      </Switch>
    </Router>
  );
}

export default App;
