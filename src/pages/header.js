import React from 'react';

//icons
import { Icon } from '@iconify/react';
import wavingHandLightSkinTone from '@iconify/icons-emojione/waving-hand-light-skin-tone';

const Header = () => {
    return (
    <>
        <div className='header'>
    
            <div className='headerMain'>

                <span>
                    <div className='hello'>
                        <h1>Hello!</h1> 
                        <Icon icon={wavingHandLightSkinTone} style={{fontSize: '40px'}}/>
                    </div>

                    <br/>
                    
                    <h2 className='headerText'> My name is Anja and I'm a web-designer and writer. <br/>
                     My goal is to create beautiful yet functional designs, <br/>
                     to learn and get inspired.
                    </h2>
                </span>

                <span></span>
            </div>

        </div>
    </>

    )
}

export default Header


