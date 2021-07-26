import React from 'react';
import {
    Link,
  } from 'react-router-dom';
  import Header from '../components/header';

const Home = () => {
    return (
    <>
        <Header />
            
        <div className='contentContainer'>
            <h2>Latest Posts.</h2>

            <div className='hr'/>

            <div className='postsWrapper'>
                <div className='posts'>

                    <div className='post'>
                        <time className='postTime'>Jul 24/21.</time>
                        <Link to='/dd/demystifyingdevops'>Demystifying DevOps</Link>
                        <div className='tags'>
                            <span>#devops</span>
                            <span>#culture</span>
                        </div>
                    </div>
            
                    <div className='post'>
                        <time className='postTime'>Sep 11/20.</time>
                        <Link to='/pc/socialdilemma'>Persuasive Technology: on “The Social Dilemma”</Link>
                        <div className='tags'>
                            <span>#socialmedia</span>
                            <span>#informationage</span>
                        </div>
                    </div>

                </div>
            </div>
        </div>

    </>
    )
}

export default Home