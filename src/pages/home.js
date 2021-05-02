import React from 'react';


const Home = () => {
    return (
<>

<div className='header'>
    <h1></h1>
</div>
    
<div className='contentContainer'>
    <h2>Latest Posts.</h2>
    <div className='hr'/>

        <div className='posts'>

            <div className='post'>
            <time>Apr 24</time>Sed ut perspiciatis unde omnis iste natus error sit<div className='tags'>
             <span>html</span><span>css</span><span>js</span></div>
            </div>

            <div className='post'>
            <time>Mar 21</time>Sed ut perspiciatis unde omnis iste natus error sit<div className='tags'>
                <span>html</span><span>css</span><span>js</span></div>
            </div>
            <div className='post'>
            <time>Feb 19</time>Sed ut perspiciatis unde omnis iste natus error sit<div className='tags'>
                <span>html</span><span>css</span><span>js</span></div>
            </div>
            <div className='post'>
            <time>Jan 30</time>Sed ut perspiciatis unde omnis iste natus error sit<div className='tags'>
                <span>html</span><span>css</span><span>js</span></div>
            </div>

            <div className='post'>
            <time>Dec 13</time>Sed ut perspiciatis unde omnis iste natus error sit<div className='tags'>
                <span>html</span><span>css</span><span>js</span></div>
            </div>

        </div>
  
</div>

</>
    )
}

export default Home