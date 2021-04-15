import React, { useState } from 'react';
import {
    Link
  } from "react-router-dom";

  //react icons (https://react-icons.github.io/react-icons/)
import { HiOutlineX } from 'react-icons/hi';
import { HiMenu } from 'react-icons/hi';

const Burger = () => {
    const [burgerOpen, setBurgerOpen] = useState(false) 
    const handleToggle = () => {
        setBurgerOpen(prev => !prev)
      }
      const closeMenu = () => {
        return setBurgerOpen(false)
      }
        return (
            <div className="burger">
                <button onClick={handleToggle}>{burgerOpen ? (
                     <HiOutlineX style={{ color: "#ffffff", width: "40px", height: "40px" }} />
                    ) : (
                    <HiMenu style={{ color: "#181717", width: "40px", height: "40px" }} />
                    )}
                </button>

                {burgerOpen && <div className={'burgerMenu showMenu'}>
                        
                            <Link onClick={() => closeMenu()} to='/articles'>Articles</Link>
                        
                            <Link onClick={() => closeMenu()} to='/tutorials'>Tutorials</Link>
                        
                            <Link onClick={() => closeMenu()} to='/portfolio'>Portfolio</Link>
                        
                            <Link onClick={() => closeMenu()} to='/about'>About</Link>
                       
                    </div> }
   
                    
            </div>
   );
}

export default Burger



 //initial state set to false->menu hidden. Then, onclick, call the updater function, setBurgerOpen, to update the state
 //if true->close, else->open

 /* 
 We could use 
 
 const handleToggle = () => {
  setNavbarOpen(!navbarOpen)
}

It will work. But we should not use this approach if the state depends on the previous. 
Remember, we are toggling the button text. And this depends on the Boolean value (true or false) of the state variable.
*/

/*
We are simply adding a showMenu class to the ul only if the state variable, navbarOpen is true. 
When it is false, we remove the class.
*/

/*
https://ibaslogic.com/how-to-add-hamburger-menu-in-react/ 

*/

//CSS:

/*

DESKTOP SCREENS

@media only screen and ( min-width: 600px ) {
  .burger {
    display:none;
  }
}  

MOBILE SCREENS

@media all and (max-width: 600px) {
  .burgerMenu {
    flex-direction: column;
    color: #fff;
  }

HAMBURGER MENU

.burger {
  position: relative;
}

.burger button {
  position: fixed;
  left: 40px;
  top: 40px;
  z-index: 20;
  cursor: pointer;
  background: transparent;
  outline: none; /*outline should exist for accessibility!
  border: none;
  box-shadow: none;
}


.burgerMenu.showMenu {
  width: 100%;
  max-height: 80vh;
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  background: #2e2e2e;
  z-index: 10;
}

.burger a {
  position:relative;
  display: list-item;
  list-style-type: none;
  text-decoration: none;
  font-size: 2rem;
  color: #FC5050;
  top: 25vh;
  padding: 1rem;
  text-align:center;
}


  #logo {
    margin:auto;
    padding:0;
    z-index:1000;
  }

  nav ul li {
    display: none;
  }

}  

*/