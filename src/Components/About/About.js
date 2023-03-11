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
                    <p> 
                        &nbsp;&nbsp;&nbsp;I'm a front-end developer specializing in React, JavaScript, HTML, and CSS who wants to inspire and empower people to be creative, productive, and successful. My passion for creative expression has always been very important to me since I was a kid. My work has allowed me to express myself in creative ways in web development, design, photography, and music production. 
                    </p>
                    <p>
                        &nbsp;&nbsp;&nbsp;My time in the military taught me how to work with a wide variety of people. It's because of the military's extensive training in professional development, leadership skills, and teamwork exercises that I'm able to do amazing things in groups and accomplish great things. I used this in my career in histology. At any given time, I had varying amounts of work. Sometimes I worked with other professionals, and sometimes I worked alone, which helped me develop my time management skills.
                    </p>
                    <p>
                        &nbsp;&nbsp;&nbsp;Right now in my life, I do a lot of music production work for myself and other artists and I do photography. I've been doing these things on a professional level alongside my main career. I went to school for graphic design to also supplement my creative projects and give me a chance to build a portfolio with different art mediums.
                    </p>
                    <h2>
                        Extras:
                    </h2>
                    <div className='skills-area'>
                        <img src='https://img.shields.io/badge/Adobe%20Illustrator-FF9A00?style=for-the-badge&logo=adobe%20illustrator&logoColor=white' alt='illustrator' />
                        <img src='https://img.shields.io/badge/Adobe%20Photoshop-31A8FF?style=for-the-badge&logo=Adobe%20Photoshop&logoColor=black' alt='photoshop' />
                        <img src='https://img.shields.io/badge/Adobe%20Lightroom-31A8FF?style=for-the-badge&logo=Adobe%20Lightroom&logoColor=white' alt='lightroom' />
                        <img src='https://img.shields.io/badge/Adobe%20InDesign-FF3366?style=for-the-badge&logo=Adobe%20InDesign&logoColor=white' alt='indesign' />
                        <img src='https://img.shields.io/badge/Trello-0052CC?style=for-the-badge&logo=trello&logoColor=white' alt='trello' />
                        <img src='https://img.shields.io/badge/Notion-000000?style=for-the-badge&logo=notion&logoColor=white' alt='notion' />
                        <img src='https://img.shields.io/badge/Miro-050038?style=for-the-badge&logo=Miro&logoColor=white' alt='miro' />
                        <img src='https://img.shields.io/badge/Microsoft_Office-D83B01?style=for-the-badge&logo=microsoft-office&logoColor=white' alt='microsoft office' />
                        <img src='https://img.shields.io/badge/Google%20Sheets-34A853?style=for-the-badge&logo=google-sheets&logoColor=white' alt='google sheets' />
                        <img src='https://img.shields.io/badge/Figma-F24E1E?style=for-the-badge&logo=figma&logoColor=white' alt='figma' />
                    </div>
                </div>
            </div>
            <Loader type='pacman' />
        </>
    )
}

export default About