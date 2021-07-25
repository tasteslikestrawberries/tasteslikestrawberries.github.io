import React from 'react';
import {
    Link,
  } from 'react-router-dom';

const PopCult = () => {
    return (
      <>
        <div className='contentContainer'>
          <h2 className='currentCrumb'><Link to='/articles'>Articles</Link> / Pop Culture.</h2>
          <div className='hr'/>

          <div className='articleWrapper'>
              <h3><Link to='/pc/socialdilemma'>Persuasive Technology: on “The Social Dilemma”</Link></h3>
              <div className='date'>Sep 11, 2020.</div>
              <div className='tags' style={{justifyContent: 'left', margin:'1rem 0'}}>
                <span>#socialmedia</span>
                <span>#informationage</span>
                <span>#netflix</span>
              </div>
              <p>A critical essay on issues explored in Netflix's documentary 'The Social Dilemma'.</p>
              <div className='hr'/>
          </div> 

          <div className='tags' style={{justifyContent: 'left', margin:'1rem 0'}}><span/><span/><span/></div>
        </div>
      </>
    )
}

export default PopCult