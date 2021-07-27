import React, { useState} from 'react';
import {
  Route,
  Switch,
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
    return (
        <>
            <Switch>
                <Route exact path="/">
                <Home />
                </Route>

                <Route path='/diary'>
                <Diary />
                </Route>

                <Route exact path='/articles'>
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

            </Switch>
        </>
    )
}

export default Routes


