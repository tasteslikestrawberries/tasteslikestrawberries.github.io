import React, { useState } from 'react';
import {
    Link
  } from "react-router-dom";

  //react icons (https://react-icons.github.io/react-icons/)
import { HiOutlineX } from 'react-icons/hi';
import { HiMenu } from 'react-icons/hi';

const Hamburger = () => {
    const [hamburgerOpen, setHamburgerOpen] = useState(false) 
    const handleToggle = () => {
        setHamburgerOpen(prev => !prev)
      }
      const closeMenu = () => {
        return setHamburgerOpen(false)
      }
        return (
            <nav className="hamburger">
                <button onClick={handleToggle}>{hamburgerOpen ? (
                     <HiOutlineX style={{ color: "#ffffff", width: "40px", height: "40px" }} />
                    ) : (
                    <HiMenu style={{ color: "#181717", width: "40px", height: "40px" }} />
                    )}
                </button>

                    <div className={`hamburgerMenu ${hamburgerOpen ? " showMenu" : ""}`}>
                        
                            <Link onClick={() => closeMenu()} to='/articles'>Articles</Link>
                        
                            <Link onClick={() => closeMenu()} to='/tutorials'>Tutorials</Link>
                        
                            <Link onClick={() => closeMenu()} to='/portfolio'>Portfolio</Link>
                        
                            <Link onClick={() => closeMenu()} to='/about'>About</Link>
                       
                    </div>
   
                    
            </nav>
   );
}

export default Hamburger



 //initial state set to false->menu hidden. Then, onclick, call the updater function, setHamburgerOpen, to update the state
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


//https://ibaslogic.com/how-to-add-hamburger-menu-in-react/ 