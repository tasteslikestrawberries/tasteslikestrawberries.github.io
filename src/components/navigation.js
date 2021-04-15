  
import React from 'react';
import {
    Link
  } from "react-router-dom";

  //icons
  import { FaMoon } from "react-icons/fa";

//assets
import logo from './assets/logo.png';


const Navigation = () => {
     return (
<>

<nav>
   
      <div className="logo">
      <Link to="/"><img src={logo} alt='logo' width='90px' height='110px'/></Link>  
      </div>
    
      
    
      <div className="menuItems">
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
                    <li>
                    <FaMoon className='themeToggle' style={{ color: '#FC5050', width: '25px', height: '25px' , margin:'0 50 0 50'}}/>
                    </li>
                  
                 </ul>
                
      </div>
    
    
     
    </nav>



</>

     )
    }
    
    export default Navigation


