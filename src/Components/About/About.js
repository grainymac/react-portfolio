import React, { useState, useEffect } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHtml5, faCss3, faGithubAlt, faJsSquare, faReact } from '@fortawesome/free-brands-svg-icons'
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
                <div className='text-zone'>
                    <h1>
                        <AnimatedLetters letterClass={letterClass} strArray={['A', 'b', 'o', 'u', 't', ' ', 'm', 'e']} idx={15} />
                    </h1>
                    <p> I am a front-end developer, specializing in React, JavaScript, HTML, and CSS, that is interested in working with creative teams that inspire and empower people to be creative, productive, and successful in their lives. Being a huge advocate for creative expression has always been a very important part of my life since I was young. It has allowed me to express myself in creative ways in web development, designing, photography, and music production and help others do the same. </p>
                    <p>From my time in the military, it has taught how to work with many different kind of people. Because of the military's robust training regimen on professional development, leadership skills, and team work exercises, it has allowed me to be really effective in group settings and getting important tasks done. This was important with my career in Histology. I was dealing with varying amounts of work at any given time. Most of the time i was working with other professionals and some time I was working alone which gave me opportunities to develop my time management skills.</p>
                    <p>My creative career starts at a very young age for me. Right now in my life, I do a lot of music production work for myself and other artists and I do photography. I've been doing these things on a professional level along side my main career. I went to school for graphic design to also supplement my creative projects and give me a chance to build a portfolio with different art mediums.</p>
                </div>
                <div className='stage-cube-cont'>
                    <div className='cubespinner'>
                        <div className='face1'>
                            <FontAwesomeIcon icon={faJsSquare} color='#efd81d'/>
                        </div>
                        <div className='face2'>
                            <FontAwesomeIcon icon={faHtml5} color='#f06529'/>
                        </div>
                        <div className='face3'>
                            <FontAwesomeIcon icon={faCss3} color='#28a4d9'/>
                        </div>
                        <div className='face4'>
                            <FontAwesomeIcon icon={faReact} color='#5ed4f4'/>
                        </div>
                        <div className='face5'>
                            <FontAwesomeIcon icon={faGithubAlt} color='#ec4d28'/>
                        </div>
                        <div className='face6'>
                            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/materialui/materialui-original.svg" />
                        </div>
                    </div>
                </div>
            </div>
            <Loader type='pacman' />
        </>
    )
}

export default About