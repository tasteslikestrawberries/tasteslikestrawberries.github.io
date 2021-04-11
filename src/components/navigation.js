import React from 'react';
import {
    Link
  } from "react-router-dom";

//assets
import logo from './assets/logo.png';


const Navigation = () => {
     return (
        <>
            <div className='topNav'>

                <div className='left'>
                <i className='github'>ICON</i>
                <i className='dribbble'>ICON</i>
                <i className='something'>ICON</i>
            </div>


                <div className='middle'>
                <Link className='logo' to="/"><img src={logo} alt='Logo' width='60px' height='80px'/></Link>   
                 </div>


                <div className='right'>
                <i>THEME TOGGLE</i>
                </div>

            </div>

            <div className='bottomNav'>
                 <ul>
                    <li>
                    <Link className='item' to='/articles'>Articles</Link>
                    </li>
                    <li>
                    <Link className='item' to='/tutorials'>Tutorials</Link>
                    </li>
                    <li>
                    <Link className='item' to='/portfolio'>Portfolio</Link>
                    </li>
                    <li>
                    <Link className='item' to='/about'>About</Link>
                    </li>
                 </ul>
            </div>

        </>
     )
    }
    
    export default Navigation


  /* 
   <nav>
    
      <ul>   
              <Link className='logo' to="/"><img src={logo} alt='Logo'/></Link>   
          <li>
              <Link to='/articles'>Articles</Link>
          </li>
          <li>
              <Link to='/tutorials'>Tutorials</Link>
          </li>
          <li>
              <Link to='/portfolio'>Portfolio</Link>
          </li>
          <li>
              <Link to='/about'>About</Link>
          </li>
      </ul>
    </nav> */
      
 
/* custom navigation bar

      <nav>
          <ul>
              <li>
                  <Link to='/'>Home</Link>
              </li>
              <li>
                  <Link to='/articles'>Articles</Link>
              </li>
              <li>
                  <Link to='/tutorials'>Tutorials</Link>
              </li>
              <li>
                  <Link to='/about'>About</Link>
              </li>
          </ul>
        </nav> 

*/

/* inline style
<Link to='/' style={{ color: '#181717' }}>Home</Link>
*/