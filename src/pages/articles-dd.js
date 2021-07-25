import React from 'react';
import {
    Link,
  } from 'react-router-dom';

const ArticlesDD= () => {
    return (
    <>
        <div className='contentContainer'>
          <h2 className='currentCrumb'><Link to='/articles'>Articles</Link> / Design and Development.</h2>
          <div className='hr'/>

          <div className='articles'>

            <div className='article'>
              <h3><Link to='/dd/demystifyingdevops'>Demystifying DevOps</Link></h3>
              <div className='date'>24 Jul 2021.</div>
          
              <div className='tags' style={{justifyContent: 'left', margin:'1rem 0'}}>
                <span>#devops</span>
                <span>#culture</span>
                <span>#CI</span>
                <span>#CD</span>
              </div>
              <p>Grasping the concept of DevOps.</p>
            </div> 
            <div className='hr'/>

            <div className='article'>
              <h3><Link to=''></Link></h3>
              <div className='date'></div>
              <div className='tags' style={{justifyContent: 'left', margin:'1rem 0'}}>
                <span></span>
                <span></span>
                <span></span>
              </div>
              <p></p>
            </div> 
       
          </div>
        </div>
    </>
    )
}

export default ArticlesDD