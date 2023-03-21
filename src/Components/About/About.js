import React, { useState, useEffect } from 'react'
import AnimatedLetters from '../AnimatedLetters/AnimatedLetters'
import './About.scss'
import Loader from 'react-loaders'

const About = () => {
    const [letterClass, setLetterClass] = useState('text-animate')

    useEffect(() => {
        setLetterClass('text-animate-hover')
    }, [])

    return (
        <>
            <div className='container about-page'>
                <div className='text-zone about-zone about'>
                    <h1>
                        <AnimatedLetters letterClass={letterClass} strArray={['A', 'b', 'o', 'u', 't', ' ', 'm', 'e']} idx={15} />
                    </h1>
                    <p> 
                        &nbsp;&nbsp;&nbsp;Hey, whats up?! I'm a front-end developer with a passion for creating beautiful and functional user interfaces using React.js and SCSS. Also as a creative with diverse skills and interests, I have the ability to explore and express your ideas through a variety of mediums, each informing and enhancing the others. With my background in graphic design, I bring a unique perspective to my work and enjoy exploring new ways to integrate design into my coding projects. I'm a highly creative person who is always looking for ways to think outside the box and push my boundaries. My dream is to work on a team that develops solutions and applications that have a positive impact on people's lives. I recently graduated from a coding bootcamp called Turing School of Software & Design and am excited to continue learning and growing in my career as a developer. 
                    </p>
                    <p>
                        &nbsp;&nbsp;&nbsp;I started my journey as a software developer by attending a coding bootcamp at Turing School of Software & Design, where I learned new skills remotely. Despite the challenges of the fast-paced learning environment, I found the experience extremely rewarding, with a strong emphasis on community-based learning. During Turing, I learned Javascript and some other techonologies like React.js, GSAP, and Material UI for the first time. After graduating, you faced the challenge of finding a job in the tech field so I've been keeping busy developing my own personal applications and websites. Despite this hurdle, I remain ambitious and committed to continuing my learning and pushing forward in my career as a software developer.
                    </p>
                    <h2>
                        Extras:
                    </h2>
                </div>
            </div>
            <Loader type='ball-scale-ripple-multiple' />
        </>
    )
}
export default About