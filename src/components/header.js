import React from 'react';

//icons
import { Icon } from '@iconify/react';
import wavingHandLightSkinTone from '@iconify/icons-emojione/waving-hand-light-skin-tone';

//assets
import headerlogo from '../pages/assets/headerlogo.png'

const Header = () => {
    return (
    <>
        <div className='header'>
    
            <div className='headerIntro'>

                <span>
                    <div className='hello'>
                        <h1>Hello!</h1> 
                        <Icon icon={wavingHandLightSkinTone} style={{fontSize: '40px'}}/>
                    </div>

                <br/>
                    
                    <h2 className='headerText'> My name is Anja and I'm a front-end developer from Rijeka, Croatia. <br/><br/>
                     My passion is creating reactive web apps with a user-friendly interface. I enjoy learning new technologies and
                     getting inspired. 
                    </h2>
                </span>

            </div>

            <span className='headerAnimation'>
                <img src={headerlogo} className='headerLogo' alt='headerlogo' style={{width: '10vw'}} ></img>
                <div className='dots'></div>
            </span>

      
               
                  
              
                  

        </div>
    </>

    )
}

export default Header


