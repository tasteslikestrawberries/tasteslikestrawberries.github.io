  
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


/*CSS

*, *:before, *:after {
    box-sizing: inherit;
  }
  
  html {
    box-sizing: border-box;
    font-family: 'Mulish', sans-serif;
    color: #181717;
  }
  
  
  a:link, a:visited, a:active  {
    text-decoration: none; 
    color: #181717;
    font-weight: bold;
    padding: 1rem;
  }
  
  a:hover  {
    color: #FC5050;
  }
  
  .header {
    margin-top: 1rem;
    padding: 1rem;
    width: 100%;
    height: 25rem;
    background-color: #eeeeee ;
  }
  
  h1 {
    margin:0;
  }
  

  .topNav {
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    flex-wrap: nowrap;
  }
  
  
  .right {
    display:inline-flex;
  }
  
  .left {
    display: inline-flex;
  }
  
  .middle {
    display:inline-flex;
  }
  
  

  .bottomNav {
    letter-spacing: 0.1em; 
    background-color:#eeeeee;
    margin: 0;
    padding:0;
    display: flex;
    justify-content: center; 
  }
  
   ul {
   margin:0;
   padding:0;
  }
  
  ul li {
    display: inline-flex;  
    font-size: 25px;
  }
  
  

  @media screen and (max-width: 800px) {
    .item{
      font-size: 20px;
    }
  
  }
  
  
  @media screen and (max-width: 600px) {
    .item{
      font-size: 18px;
    }
  
  }
  
  @media screen and (max-width: 440px) {
    .item{
      font-size: 14px;
    }
    
  }
  
  @media screen and (max-width: 385px) {
    .item{
      font-size: 12px;
    }
    
  }
  
  @media screen and (max-width: 360px) {
    .item{
      font-size: 10px;
    }
    
  }
  
  @media screen and (max-width: 330px) {
    .logo {
      width: 50px;
      height: 65px;
    }
    a:link, a:visited, a:active  {
      padding: 0.5rem;
    }
  }
  */