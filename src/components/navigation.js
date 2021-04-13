import React from 'react';
import {
    Link
  } from "react-router-dom";

//icons
import { FaGithub } from "react-icons/fa";
import { FaDribbble } from "react-icons/fa";

//assets
import logo from './assets/logo.png';


const Navigation = () => {
     return (
        <>
            <div className='topNav'>

                <div className='left'>
                <a href='http://github.com/tasteslikestrawberries' target='_blank' rel='noreferrer'><FaGithub style={{ color: "#FC5050", width: "25px", height: "25px"}}/></a>
                <a href='http://dribbble.com/tasteslikestrawberries' target='blank' rel='noreferrer'><FaDribbble style={{ color: "#FC5050", width: "25px", height: "25px" }}/></a>
            </div>


                <div className='middle'>
                <Link to="/"><img className='logo' src={logo} alt='logo' width='90px' height='110px'/></Link>   
                 </div>


                <div className='right'>
                <i>T.TOGGLE</i>
                </div>

            </div>

            <nav className='bottomNav'>
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
            </nav>

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