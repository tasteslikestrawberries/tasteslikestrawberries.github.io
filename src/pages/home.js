import React from 'react';
import {
    Link,
  } from 'react-router-dom';
  import Header from '../components/header';

const Home = () => {
    return (
    <>
        <Header />
            
        <div className='contentContainer'>
            <h2>Latest Posts.</h2>
            <div className='hr'/>

            <div className='tableWrapper'>
                <table>
                    <tbody>
                        <tr>
                            <td><time>Jul 24/21.</time></td>
                            <td><Link to='/dd/demystifyingdevops'>Demystifying DevOps</Link></td>
                            <td className='tags'>
                                <span>#devops</span>
                                <span>#culture</span>
                            </td>
                        </tr>
                    
                        <tr>
                            <td><time>Sep 11/20.</time></td>
                            <td><Link to='/pc/socialdilemma'>Persuasive Technology: on “The Social Dilemma”</Link></td>
                            <td className='tags'>
                                <span>#socialmedia</span>
                                <span>#informationage</span>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>

        </div>
    </>
    )
}

export default Home