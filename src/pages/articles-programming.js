import React from 'react';
import {
    Link,
  } from 'react-router-dom';
//import ReactUtterences from 'react-utterances'

/*icons
import { Icon } from '@iconify/react';
import quoteLeft from '@iconify/icons-fa-solid/quote-left';
*/


const Programming = () => {
    return (
    <>
        <div className='contentContainer'>

            <h2><Link to='/articles'>Articles</Link> / Design and programming.</h2>

        <div className='hr'/>

            <div className='contentArticle'>
                {/*<div className='headerArticle'>
                    <h2></h2>
                    <time></time> 
                </div>*/}
                
                Sorry, there is no content here yet :/

                </div>

                {/*<ReactUtterences repo={repo} type={'pathname'} />*/}
        </div>
    </>
    )
}

export default Programming