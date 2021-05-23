import React from 'react';
//assets
import portfolio from './assets/portfoliodesigns/portfolio.pdf'
//thumbs
import thumbflowbook from './assets/portfoliodesigns/thumbflowbook.png';
import thumblandingpage from './assets/portfoliodesigns/thumblandingpage.png';
//import thumbPrettyPuzzled1 from './assets/portfoliodesigns/thumbPrettyPuzzled1.png';
import thumbPrettyPuzzled2 from './assets/portfoliodesigns/thumbPrettyPuzzled2.png';
import thumbtasteslikestrawberries2 from './assets/portfoliodesigns/thumbtasteslikestrawberries2.png';
import thumbMachineManLayout from './assets/portfoliodesigns/thumbMachineManLayout.png';
import thumbpassionpages from './assets/portfoliodesigns/thumbpassionpages.png';
import thumbMonochromeParticlesLayout2 from './assets/portfoliodesigns/thumbMonochromeParticlesLayout2.png';
import thumbrollerskates from './assets/portfoliodesigns/thumbrollerskates.png';
import thumbFurnessence from './assets/portfoliodesigns/thumbFurnessence.png';
import thumbMyCalendar from './assets/portfoliodesigns/thumbMyCalendar.png';
import thumbBubbly from './assets/portfoliodesigns/thumbBubbly.png';
import thumbHappier from './assets/portfoliodesigns/thumbHappier.png';
import thumbdarkwillow from './assets/portfoliodesigns/thumbdarkwillow.png';
import thumblicitar from './assets/portfoliodesigns/thumbLicitar.png';



const Portfolio = () => {
    return (
    <>
        <div className='contentContainer'>

            <h2>Portfolio.</h2>

        <div className='hr'/>

            <div id='contentPortfolio' className='content'>

            <a href= {portfolio} target='_blank' rel='noreferrer'>Download my portfolio (April 2021, PDF)</a>

            <h2>Web design</h2>
            <a href='https://tasteslikestrawberries.github.io/assets/portfoliodesigns/flowbook.png' target='_blank' rel='noreferrer'><img src={thumbflowbook} alt='flowbook' ></img></a>
            <a href='https://tasteslikestrawberries.github.io/assets/portfoliodesigns/landingpage.png' target='_blank' rel='noreferrer'><img src={thumblandingpage} alt='landingpage' ></img></a>
            {/*<a href='https://tasteslikestrawberries.github.io/assets/portfoliodesigns/PrettyPuzzled2.png' target='_blank' rel='noreferrer'><img src={thumbPrettyPuzzled1} alt='prettypuzzled' ></img></a>*/}
            <a href='https://tasteslikestrawberries.github.io/assets/portfoliodesigns/PrettyPuzzled1.png' target='_blank' rel='noreferrer'><img src={thumbPrettyPuzzled2} alt='prettypuzzled' ></img></a>
            <a href='https://tasteslikestrawberries.github.io/assets/portfoliodesigns/tasteslikestrawberries.png' target='_blank' rel='noreferrer'><img src={thumbtasteslikestrawberries2} alt='tasteslikestrawberries' ></img></a>
            <a href='https://tasteslikestrawberries.github.io/react-app' target='_blank' rel='noreferrer' ><img src={thumbMachineManLayout} alt='machineman'></img></a>
            <a href='https://tasteslikestrawberries.github.io/assets/portfoliodesigns/passionpages.png' target='_blank' rel='noreferrer'><img src={thumbpassionpages} alt='passionledushere'></img></a>
            <a href='https://tasteslikestrawberries.github.io/layouts/monochromeparticles/shop.html' target='_blank' rel='noreferrer'><img src={thumbMonochromeParticlesLayout2} alt='monochromeparticles'></img></a>
            <a href='https://tasteslikestrawberries.github.io/assets/portfoliodesigns/rollerskates.png' target='_blank' rel='noreferrer'><img src={thumbrollerskates} alt='rollerskates'></img></a>
            <a href='https://tasteslikestrawberries.github.io/assets/portfoliodesigns/Furnessence.png' target='_blank' rel='noreferrer'><img src={thumbFurnessence} alt='furnessence' ></img></a>

            <br/>

            <h2>App design</h2>
            <a href='https://tasteslikestrawberries.github.io/assets/portfoliodesigns/MyCalendar.png' target='_blank' rel='noreferrer'><img src={thumbMyCalendar} alt='bubbly'></img></a>
            <a href='https://tasteslikestrawberries.github.io/assets/portfoliodesigns/Bubbly.png' target='_blank' rel='noreferrer'><img src={thumbBubbly} alt='bubbly'></img></a>
            <a href='https://tasteslikestrawberries.github.io/assets/portfoliodesigns/Happier.png' target='_blank' rel='noreferrer'><img src={thumbHappier} alt='happier'></img></a>


            <br/>
            <h2>Other work</h2>
            <a href='https://tasteslikestrawberries.github.io/assets/portfoliodesigns/darkwillow.png' target='_blank' rel='noreferrer'><img src={thumbdarkwillow} alt='darkwillow'></img></a>
            <a href='https://tasteslikestrawberries.github.io/assets/portfoliodesigns/Licitar.png' target='_blank' rel='noreferrer'><img src={thumblicitar} alt='licitar'></img></a>



            </div>

        </div>

    </>
    )
}

export default Portfolio