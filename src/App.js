import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';

//components
import Home from './pages/home';
import Articles from './pages/articles';
import Tutorials from './pages/tutorials';
import About from './pages/about';
import Navigation from './components/navigation';

//styles
import './App.css';

export default function App() {
  return (
   <Router>

    <>
    <Navigation />

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

