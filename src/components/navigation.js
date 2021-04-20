  
import React, { useState} from 'react';
import {
    Link
  } from "react-router-dom";

  //icons
  import { Icon } from '@iconify/react';
  import firstQuarterMoonFace from '@iconify/icons-emojione-v1/first-quarter-moon-face';
  import sunwithfaceIcon from '@iconify/icons-fxemoji/sunwithface';
//assets
import logo from './assets/logo.png';


const Navigation = () => {

    const [Sun, setSun] = useState(false)
    const handleToggle = () => {
      setSun(prev => !prev)
    }
  
     return (
    <>
      <nav>

          <button onClick={handleToggle}>{Sun ? (
              <Icon className='themeToggle' icon={sunwithfaceIcon} style={{fontSize: '32px'}} />
                 ) : (
              <Icon className='themeToggle' icon={firstQuarterMoonFace} style={{fontSize: '32px'}} />
           )}
          </button>



          <div className="logo">
              <Link to="/"><img src={logo} alt='logo' width='90px' height='110px'/></Link>  
          </div>
    
    
          <div className="menuItems">
          
              <Link className='item' to='/articles'>Articles</Link>

              <Link className='item' to='/tutorials'>Tutorials</Link>

              <Link className='item' to='/portfolio'>Portfolio</Link>

              <Link className='item' to='/about'>About</Link>
          </div>
    

      </nav>



    </>

      )
}
    
    export default Navigation
