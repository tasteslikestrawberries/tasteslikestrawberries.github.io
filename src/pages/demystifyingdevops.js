import React from 'react';
import {
  Link,
} from 'react-router-dom';

//icons
import { Icon } from '@iconify/react';
import quoteLeft from '@iconify/icons-fa-solid/quote-left';

const DemystifyingDevOps = () => {
  return (
    <>
        <div className='contentContainer'>

          <h2 className='currentCrumb'><Link to='/articles'>Articles</Link> / <Link to='/articles/dd'>Design and Development</Link> / Demystifying DevOps.</h2>
          <div className='hr'/>

          <div className='articles'></div>

          <div className='headerArticle'>
            <h2>Demystifying DevOps</h2>
            <time>Jul 24, 2021.</time> 
          </div>

          <div className='contentArticle'>

            <p>
            During my last job interview, I was asked to explain the concept of DevOps. I actually had no idea it was a <em>concept</em>, as I thought it to be a position that fits a certain job description - an engineer whose main concern is development and maintenance of an infrastructure, but my interviewer said it was really a much broader term.
            </p>

            <p>
            Later that day I asked my boyfriend about it - he laughed and said DevOps is a mystical profession and that it’s more like a set of business principles or even a culture. I was intrigued and went on a googling spree. I found a number of articles with a kind of an activist approach that fought for the subject not to be reduced to just a tech position but considered as a core philosophy within an IT organization. 
            </p>


            <h3>So what is DevOps then?</h3>
            <p>
            The phrase combines the term <b>Dev</b> which represents the software development - the code writers and the term <b>Ops</b> which is short for operations - the engineers who build and maintain the system. 
            </p>

            <p>
            Just grasping the concept made me understand this new buzzword as a methodology, an implementation of principles and practices that encompasses both the needs of a business and a consumer, an approach whose main goal is to provide value to both and deliver the highest quality product as possible. A key ingredients in this relationship would be effective communication and collaboration that promptly responds to market demands, building a proactive environment and constructing a culture of innovation.
            </p>

            <h3>Culture of innovation</h3>

            <p>
            As Nicola Hepburn argues in her <a href='https://www.marsdd.com/news/what-is-a-culture-of-innovation' target='blank'>article</a> about innovation in Ontario:

            <h4 style={{fontWeight: '200'}}>
            <Icon icon={quoteLeft} style={{color: '#eeeeee', fontSize: '64px', marginRight:'1rem'}} />
            <em>
            <p><li>A culture of innovation is an environment that supports creative thinking and advances efforts to extract economic and social value from knowledge, and, in doing so, generates new or improved products, services or processes.</li></p>
                        
            <p><li>A healthy culture of innovation has a shared set of values and mutually reinforcing beliefs about the importance of innovation as well as an integrated pattern of behaviour that supports research and innovation.</li></p>
            <p><li>A thriving culture of innovation can leverage the existing strengths of a given research and innovation ecosystem.</li></p>
            </em>
            </h4>
            </p>

            <p><b>So, how does DevOps embody this philosophy?</b> To understand it, it’s necessary to take a step back and look at the historical context from which it arose. </p>
            <p>During the 2000s, the problem of division between the worlds of development and operations that were working on the same project became apparent.
            The way software was developed and tested back then was, apparently, far from optimized - there was a separation of concerns between developers and 
            operations engineers which was making the deployment phase, well - to summarize it, a hell to go through.
            </p>
            <p>As the release date was getting closer and software was still not ready for production stage, the QA and Ops would either have to push the date (which the businessmen would of course oppose) or deploy the software and as quickly as possible try to minimize the mess and stabilize the product.</p>
            <p>
            That caused an emerging need for a higher level of coordination between the devs, ops and testers - <b>a shared approach to given tasks so they could together create software that would suit the nature of the systems it would be deployed on.</b> </p>
            <p>
            That approach would have to be capable to resolve the following issues: reduce the failure rates for new releases, ensure the faster recovery time in case of crashes and making the time between fixes shorter - improving the reliability, security and quality of the software that would, finally, make the customer happy. </p>

            <p>
            A huge part of this process is the <b>CI/CD pipeline</b>, which stands for <em>continuous integration and continuous delivery and/or deployment</em>. It represents <b>a series of steps that automatize the software delivery process</b> - the automation of tests saves time and minimizes the chance of human error. <b>The continuous integration</b> is a fundamental DevOps practice that encourages developers to frequently merge their code into the main branch where it is then validated by automated tests in the build phase. That solves the problem of waiting until release date to merge changes and ensures that the software is repeatedly analyzed and tested. </p>

            <p>
            <b>Continuous delivery</b> could be understood as next level CI where all code changes are automatically tested for bugs and uploaded to the shared repository so that the software is always deployment-ready in the sense of that it has passed through a standardized testing process. </p>
            <p>
            <b>Continuous deployment</b> is yet another step further: every change that passed the production stages is released to customers, so that only a failed test is prevented from deployment to production. This step makes the infamous <em>Release day</em> a thing of the past and actually makes code go live minutes after it’s written so the customers’ feedback can be almost immediately received. </p>


            <p>
            What goes without saying here is that, when following this practices, the quality of the testing process has to be first-class together with an awareness about the <b>importance of investing in necessary tools and technologies altogether</b>. </p>
            <p>
            The customers’ feedback is invaluable for staying in the game, but what’s equally important is <b>sharing the feedback within  the entire organization</b>  and doing it continuously too. </p>
            <p>
            Bridging the communication gap from within (<b> top to bottom AND bottom to top</b> ) through identifying the common goals, questioning, evaluating, sharing the constructive criticism and creating a working environment which is not only <b>customer-centric</b> , but <b>community-oriented</b>  in the sense of promoting closer collaboration between employees, supporting diversity and appreciating <b> the polyphony of different viewpoints</b>  - investing in and acknowledging the expertise of each employee in their own field and enabling their work and thought process instead of getting in their way. </p>
            <p>
            That is what makes DevOps <b>a culture</b> and an <b>inclusive</b> one at its best, which thrives to make improvements for <b>all</b> its stakeholders and has <b>a clear vision of purpose</b> while making decisions, setting direction, pursuing opportunities and overcoming obstacles through shared experience. </p>

          </div>
       </div>    
    </>
  )
}

export default DemystifyingDevOps