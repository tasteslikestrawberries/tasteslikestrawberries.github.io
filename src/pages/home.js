import React from 'react';

const Home = () => {
    return (
<>
<div className='header'>
    <h1>Hello Home!</h1>
</div>
    
<div className='content'>
    <h2>LATEST POSTS</h2>
    <hr/>
</div>

<div className='posts'>

    <div className='post'>
         <time>Apr 24</time>Sed ut perspiciatis unde omnis iste natus error sit
    </div>

    <div className='post'>
         <time>Mar 21</time>Sed ut perspiciatis unde omnis iste natus error sit
    </div>

    <div className='post'>
         <time>Feb 19</time>Sed ut perspiciatis unde omnis iste natus error sit
    </div>

    <div className='post'>
         <time>Jan 30</time>Sed ut perspiciatis unde omnis iste natus error sit
    </div>

    <div className='post'>
         <time>Dec 13</time>Sed ut perspiciatis unde omnis iste natus error sit
    </div>


</div>
</>
    )
}

export default Home