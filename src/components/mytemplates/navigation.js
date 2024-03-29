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

    const [sun, setSun] = useState(false)
    const handleToggle = () => {
      setSun(prev => !prev)
    }
  
     return (
    <>
      <nav>

          <button onClick={handleToggle}>{sun ? (
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

              <Link className='item' to='/blog'>blog</Link>

              <Link className='item' to='/projects'>projects</Link>

              <Link className='item' to='/about'>About</Link>
          </div>
    

      </nav>



    </>

      )
}
    
    export default Navigation