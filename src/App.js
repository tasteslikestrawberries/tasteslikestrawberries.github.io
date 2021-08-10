import React, { useState} from 'react';
import {
  BrowserRouter as Router,
  Link,
} from 'react-router-dom';

//components
import Routes from './components/routes';
import ScrollToTop from './components/scrolltotop';
import Footer from './components/footer';
//import Breadcrumbs from './components/breadcrumbs';

//icons
import { Icon } from '@iconify/react';
import firstQuarterMoonFace from '@iconify/icons-emojione-v1/first-quarter-moon-face';
import sunwithfaceIcon from '@iconify/icons-fxemoji/sunwithface';

//assets
import logo from './pages/assets/logo.png';

//styles
import './styles.css';

export default function App() {

    const [sun, setSun] = useState(false)
    const handleToggle = () => {
      setSun(prev => !prev)
    }
    
    const [darkTheme, setDark] = useState(false)
    const setDarkTheme = () => {setDark(prevTheme => !prevTheme)}

  return (

    <Router>
      <ScrollToTop />
      <>
        <div className={darkTheme ? 'dark-theme' : 'light-theme'}>
          
          <nav>
     
              <button onClick={() => { handleToggle(); setDarkTheme();}}>
                {sun ? (
                <Icon className='themeToggle' icon={sunwithfaceIcon} style={{fontSize: '32px'}} />
                ) : (
                <Icon className='themeToggle' icon={firstQuarterMoonFace} style={{fontSize: '32px'}} />
                )}
              </button>

              <div className="logo">
                <Link to='/'><img src={logo} alt='logo' width='90px' height='110px'/></Link>  
              </div>
              
              <div className="menuItems">
                <Link className='item' to='/diary'>Diary</Link>
                <Link className='item' to='/articles'>Articles</Link>
                <Link className='item' to='/portfolio'>Portfolio</Link>
                <Link className='item' to='/about'>About</Link>
              </div>
              
              <button className='desktopThemeToggle' onClick={() => { handleToggle(); setDarkTheme();}}>
                {sun ? (
                <Icon className='themeToggle' icon={sunwithfaceIcon} style={{fontSize: '32px'}} />
                ) : (
                <Icon className='themeToggle' icon={firstQuarterMoonFace} style={{fontSize: '32px'}} />
                )}
              </button>

          </nav>

          { /*With <Switch>, only the first child <Route> that matches the location gets rendered.*/ }

          <Routes />

          <Footer/>
        </div>
      </>
   </Router>

  );
}
