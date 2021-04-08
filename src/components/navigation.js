import React from 'react';
import {
    Link
  } from "react-router-dom";

//material-ui
import {  
  AppBar,
  Tabs,
  Tab   
          } from '@material-ui/core/';


const Navigation = () => {
     return (
        <AppBar>
            <Tabs className='tabs'
            >
              <Tab label='Home' component={Link} to='/home'  />
              <Tab label='Articles' component={Link} to='/articles'  />
              <Tab label='Tutorials' component={Link} to='/tutorials' />
              <Tab label='About' component={Link} to='/about' />
            </Tabs>
          
        </AppBar>
     )
}

export default Navigation

//https://material-ui.com/api/tabs/
//https://paulgrajewski.medium.com/react-material-ui-drawer-with-routes-8e27c91b6119