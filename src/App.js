import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom';
import Home from './components/home';
import Articles from './components/articles';
import Tutorials from './components/tutorials';
import About from './components/about';

export default function App() {
  return (
   <Router>

    <>

      <nav>
          <ul>
              <li>
                  <Link to='/'>Home</Link>
              </li>
              <li>
                  <Link to='/articles'>Articles</Link>
              </li>
              <li>
                  <Link to='/tutorials'>Tutorials</Link>
              </li>
              <li>
                  <Link to='/about'>About</Link>
              </li>
          </ul>
      </nav>
    { /* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */ }
      <Switch>

        <Route path='/articles'>
          <Articles />
        </Route>

        <Route path='/tutorials'>
          <Tutorials />
        </Route>
        
        <Route path='/about'>
          <About />
        </Route>

        <Route>
          <Home />
        </Route>

      </Switch>

    </>

   </Router>

  );

  
}


 /* - home is at the end of the router and IN switch so if no path (previous links) is loaded,
   it loads the one without defined path (home)
   - without switch router would load every component with or without path, but with switch 
   just the 1st one loads and the other ones don't  
*/