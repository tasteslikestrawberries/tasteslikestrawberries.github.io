import React from 'react';
import {
    Link,
  } from 'react-router-dom';


  //icons
import { Icon } from '@iconify/react';
import televisionIcon from '@iconify/icons-emojione/television';
import bxCodeCurly from '@iconify/icons-bx/bx-code-curly';

const Articles = () => {
    return (
    <>
        <div className='contentContainer'>
            <h2>Articles.</h2>
        <div className='hr'/>
            <div className='content'>
                <div className='articlesTopic'><Icon icon={televisionIcon} style={{fontSize: '64px'}}/> <Link to='/articles-popculture'>POP Culture</Link></div>
                <br/>
                <div className='articlesTopic'><Icon icon={bxCodeCurly} style={{color: '#eeeeee', fontSize: '64px'}}/> <Link to='/articles-programming'>Design and programming</Link></div>
            </div>
        </div>
    </>

    )
}

export default Articles