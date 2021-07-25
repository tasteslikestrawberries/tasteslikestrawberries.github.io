import React from 'react';
import {
    Link,
  } from 'react-router-dom';
  
//icons
import { Icon } from '@iconify/react';
import quoteLeft from '@iconify/icons-fa-solid/quote-left';

const SocialDilemma = () => {
    return (
        <>
            <div className='contentContainer'>
                <h2 className='currentCrumb'><Link to='/articles'>Articles</Link> / <Link to='/articles/pc'>Pop Culture</Link> / Persuasive Technology: On “The Social Dilemma”.</h2>
                <div className='hr'/>
            
                <div className='articles'></div>
                
                <div className='headerArticle'>
                    <h2>Persuasive Technology: On “The Social Dilemma”</h2>
                    <time>Sep 11, 2020.</time> 
                </div>

                <div className='contentArticle'>
                    <p>
                    There are only two industries that call their customers users : illegal drugs and software, it is emphasized in the new Netflix film <em>The Social Dilemma</em>.
                    </p>
                    This documentary-narrative drama hybrid addresses two main problems with today’s social media platforms, one of which is their addictive nature and the other 
                    their role in the process of Information Age becoming the <em>Disinformation Age</em>, in which outright lies and deliberate disinformation are spread online at eyeblink
                    speeds (<a href='http://magazine.gwu.edu/the-disinformation-age' target='blank'>Babbington, C.</a>), thus shaping the public and political discourse and posing a threat to democracy.
                    <p>
                    As Tristan Harris, a former design ethicist at Google, says in the documentary, what we’re seeing now with COVID is just an extreme version of what’s happening 
                    across our information ecosystem: social media amplifies exponential gossip and exponential hearsay to the point that we don’t know what’s true, no matter what
                    issue we care about.
                    </p>
                    <h3>And wasn't the Internet supposed to save democracy?</h3>
                    <p>
                    The web, according to the techno-utopian pronouncements of the 1990s/00s was supposed to make information easier and freer to share, to advantage the citizen 
                    at the expense of governments, to provide access to more viewpoints and more vibrant debates than residents of democracies had ever experienced before. It was 
                    supposed to topple dictators, to build social collaboration, to make information available to all, thus giving the power to the people 
                    (<a href='https://www.vox.com/policy-and-politics/2018/6/8/17202918/internet-democracy-facebook-cambridge-analytica-alec-ross-clay-shirky-jeff-jarvis' target='blank'>Matthews, D.</a>).
                    </p>

                    <p>
                    Such claims seem like a bad joke in today’s society in which, even though the independent media outlets still exist and there is apparently an unlimited variety
                    of entertainment and media options, most of the media consumed is actually owned by <a href='https://www.webfx.com/blog/internet/the-6-companies-that-own-almost-all-media-infographic/' target='blank'>The Big 6</a>. As for the digital conglomerates that are today the primary source 
                    of information for most people and especially the younger generations, they are making billions of dollars selling advertising space on their various free-to-use
                    social media platforms.
                    </p>
                    <p>
                    As it is argued in “The Social Dilemma”, if you’re not paying for the product, you are the product. Tech companies make billions out of our behaviour, monetising 
                    our daily activities while every action we make online is monitored and helps to build a picture of who we are as individuals.
                    </p>

                    <br/>

                    <h3 style={{textAlign: 'center'}}><Icon icon={quoteLeft} style={{color: '#eeeeee', fontSize: '64px', marginRight:'1rem'}} /><em>if you’re not paying for the product, you ARE the product.</em></h3>

                    <br/>

                    <p>
                    The goal is to create the best algorithm possible that will serve us such content that will keep us engaged and scrolling for as long as possible. And to <em>make
                    predictions, you need a lot of data.</em>
                    </p>

                    <p>
                    The idea of artificial intelligence controlling our society probably won’t come to life in an imagined form of a high-tech human-like robots and androids, but
                    it’s already happening in form of huge rooms full of supercomputers that are working 24/7 on the process of collection and commodification of personal data 
                    with the core purpose of making profit for their owners – the foundation of a new form of capitalism that Shoshana Zuboff describes as surveillance capitalism
                    in her 2019 book <em>The Age of Surveillance Capitalism</em>.
                    </p>
                    <p>
                    It is not our data being sold, as the film argues – it’s not in Facebook’s interest to give up the data. They build models that predict our actions and whoever 
                    has the best model, wins.
                    This kind of persuasive technology that first tries to recognize behaviour patterns, then modify behaviour and make users take action in a desired direction,
                    is indicative of a culture which is based on manipulation and which builds itself on one of the basic biological imperatives – <em>our need to connect with others</em>.
                    </p>
                </div>
            </div>
        </>
    )
}

export default SocialDilemma
