import React from 'react';

import me from './assets/me.jpg';

const About = () => {
    return (
    <>
        <div className='contentContainer'>
            <h2>About.</h2>
        <div className='hr'/>
            <div className='content'>

                <img id='me' src={me} alt='authorphoto'></img>
                <p>My name is Anja and I'm from Rijeka, a small coastal town in Croatia. 
                I first got interested in web design when I was 11 and wanted to make a website about
                my favorite soap opera couple. It was about Ethan and Theresa from 'Passions' and I created 
                it using Geocities website builder. Soon, as I got interested and involved in the anime & manga
                community online, I noticed there were really beautiful fan websites about Sailor Moon, Sakura 
                and other anime. I wanted to make websites like that, and have more freedom and control over my layouts. </p>

                <p>So, I would visit a site and if I liked it, I took a look at its source code which I copied and changed
                to fit the concept of what I wanted. It was my first contact with HTML and CSS. As I didn't have any formal 
                knowledge of that languages, I learnt by just changing and replacing code until it did what I wanted. 
                It was very fun and I remember spending whole afternoons and evenings after school playing with HTML and designing
                banners, backgrounds and thumbnails. I didn't know then that you could set an image border in CSS so I did 
                the borders by hand in Paint xD </p>
                
                <p>Now that I think about it, it would have probably saved me a good deal of time and energy if I read a 
                book or a tutorial on HTML first, but I was always more interested in learning by doing, and it's 
                still the way I enjoy the most. After I got my website to look how I wanted, the next step was to publish it so
                I found a free website hosting and learnt that I must use something called a FTP server to publish it. 
                Along with that, I started learning basics of PHP and successfully got my website online and going.</p>
                
                <p>While designing graphics for my website, I started learning Adobe Photoshop and I got so captivated by it I
                    even enrolled in a course about Photoshop and digital photography (at our local 
                    <a href='https://www.ctk-rijeka.hr/' target='_blank' rel='noreferrer'> <b>CTK</b></a>). But after that I just stopped doing 
                    all of it...and years passed. I finished highschool and then graduated in Media Studies and Library Science. 
                    Mediology was my love and the latter was kind of a safe, option b, if the first one didn't work out.</p>

                <p>As a student I was very interested in writing and wanted to pursue my career in that direction. My first serious
                    job after graduation was at the local library. During that time I have passed my Library Science certification 
                    exam and it seemed logical to continue in that direction. But, for better or for worse, I lost that job and got
                    another as a teaching assistant for kids with special needs. As I did it (and still do it) only 4-5 hours a day, 
                    I had some free time on my hands to rethink what I really wanted to do, and that's when I started thinking about 
                    making websites and designing again. </p>
                
                <p>And, when I got into it, I discovered a whole new world of possibilities but also the fact that the web-design world still (fortunately)
                   relies on HTML and CSS. So I picked up where I left off years ago and started to research everything front-end related. I started learning 
                   Javascript which was a real challenge as I didn't have any previous programming experience. I also discovered the power of CSS. 
                   There is so much you can do today using just pure CSS so you don't actually have to reach for Javascript every time. </p>
                
                <p>After a few months of coding and designing websites, I found out about something called UI/UX design which caught my attention immediately. 
                  I always loved researching stuff and it was something I could relate to my Media and Cultural Studies education but also connect with my interest 
                  in front-end development. So, I decided to really work on both coding and design, because they're one of the very few things I really enjoy doing.</p>
                
                <p>It's mentally challenging, it's fun and I don't notice the hours as they go by while
                I'm doing it. And in some way it connects me to my childhood, the time when everything was way simpler and Internet was a bit
                different than today. I'd say it was a little more innocent, optimistic and community oriented...but that's a subject for 
                another occasion. So, dear reader, I hope you enjoy this website and my design work and I hope maybe it  inspires
                you to start doing something that you love and that makes you happy :-) </p>


            </div>
        </div>
    </>
    )
}

export default About