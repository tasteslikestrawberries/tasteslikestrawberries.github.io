import React from 'react';
import {
    Link,
  } from 'react-router-dom';
  import Header from './header';


const Home = () => {
    return (
    <>
        <Header />
            
        <div className='contentContainer'>
            <h2>Latest Posts.</h2>
        <div className='hr'/>

            <div className='posts'>

                <div className='post'>
                <time>Sep 11/20.</time><Link to='./articles-popculture'>Persuasive Technology: on “The Social Dilemma”</Link>
                <div className='tags'>
                <span>#articles</span><span>#popculture</span></div>
                </div>


            </div>
        
        </div>

    </>
    )
}

export default Home