import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom';
import Home from './components/home'

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
                  <Link to='/about'>About</Link>
              </li>
              <li>
                  <Link to='/users'>Users</Link>
              </li>
          </ul>
      </nav>
    { /* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */ }
      <Switch>

        <Route path='/about'>
          <About />
        </Route>

        <Route path='/users'>
          <Users />
        </Route>

        <Route>
          <Home />
        </Route>

      </Switch>

    </>

   </Router>

  );

  
}


function About() {
  return <h2>About</h2>;
}

function Users() {
  return <h2>Users</h2>;
}

 /* - home is at the end of the router and IN switch so if no path (previous links) is loaded,
   it loads the one without defined path (home)
   - without switch router would load every component with or without path, but with switch 
   just the 1st one loads and the other ones don't  
*/