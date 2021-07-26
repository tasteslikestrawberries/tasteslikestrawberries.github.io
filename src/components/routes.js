import React from 'react';
import {
    Route
  } from 'react-router-dom';

//pages
import Home from '../pages/home';
import Diary from '../pages/diary';
import Articles from '../pages/articles/articles';
import PopCult from '../pages/articles/pc/articles-pc';
import ArticlesDD from '../pages/articles/dd/articles-dd';
import Portfolio from '../pages/portfolio';
import About from '../pages/about';
import SocialDilemma from '../pages/articles/pc/socialdilemma';
import DemystifyingDevOps from '../pages/articles/dd/demystifyingdevops';

const Routes = () => {
    return(
        <>
        <Route path='/diary'>
        <Diary />
      </Route>

      <Route path='/articles' exact>
        <Articles />
      </Route>

      <Route path='/articles/pc' >
        <PopCult />
      </Route>

      <Route path='/articles/dd' >
        <ArticlesDD />
      </Route>

      <Route path='/portfolio'>
        <Portfolio />
      </Route>
      
      <Route path='/about'>
        <About />
      </Route>

      <Route path='/dd/demystifyingdevops' >
        <DemystifyingDevOps />
      </Route>

      <Route path='/pc/socialdilemma' >
        <SocialDilemma />
      </Route>

      <Route>
        <Home />
      </Route>
      </>
    )
}

export default Routes

