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
                        I am a front-end developer, specializing in React, JavaScript, HTML, and CSS, that is interested in working with creative teams that inspire and empower people to be creative, productive, and successful in their lives. Being a huge advocate for creative expression has always been a very important part of my life since I was young. It has allowed me to express myself in creative ways in web development, designing, photography, and music production and help others do the same. 
                    </p>
                    <p>
                        From my time in the military, it has taught how to work with many different kind of people. Because of the military's robust training regimen on professional development, leadership skills, and team work exercises, it has allowed me to be really effective in group settings and getting important tasks done. This was important with my career in Histology. I was dealing with varying amounts of work at any given time. Most of the time i was working with other professionals and some time I was working alone which gave me opportunities to develop my time management skills.
                    </p>
                    <p>
                        My creative career starts at a very young age for me. Right now in my life, I do a lot of music production work for myself and other artists and I do photography. I've been doing these things on a professional level along side my main career. I went to school for graphic design to also supplement my creative projects and give me a chance to build a portfolio with different art mediums.
                    </p>
                    <h2>
                        Languages & Frameworks:
                    </h2>
                    <div className='skills-area'>
                        <img src='https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white' alt='html' />
                        <img src='https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white' alt='css' />
                        <img src='https://img.shields.io/badge/Sass-CC6699?style=for-the-badge&logo=sass&logoColor=white' alt='sass' />
                        <img src='https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black' alt='javascript' />
                        <img src='https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB' alt='react' />
                        <img src='https://img.shields.io/badge/React_Router-CA4245?style=for-the-badge&logo=react-router&logoColor=white' alt='react router' />
                        <img src='https://img.shields.io/badge/styled--components-DB7093?style=for-the-badge&logo=styled-components&logoColor=white' alt='styled-components' />
                        <img src='https://img.shields.io/badge/Material--UI-0081CB?style=for-the-badge&logo=material-ui&logoColor=white' alt='material ui' />
                        <img src='https://img.shields.io/badge/GSAP-88CE02.svg?style=for-the-badge&logo=greensock&logoColor=black' alt='gsap' />
                        <img src='https://img.shields.io/badge/graphql-000000?style=for-the-badge&logo=graphql&logoColor=purple' alt='graph ql' />
                        <img src='https://img.shields.io/badge/GIT-E44C30?style=for-the-badge&logo=git&logoColor=white' alt='git' />
                        <img src='https://img.shields.io/badge/Markdown-000000?style=for-the-badge&logo=markdown&logoColor=white' alt='markdown' />
                    </div>
                    <h2>
                        Testing:
                    </h2>
                    <div className='skills-area'>
                        <img src='https://img.shields.io/badge/cypress-%1004E9F.svg?style=for-the-badge&logo=cypress&logoColor=%23F7DF1E' alt='cypress' />
                        <img src='https://img.shields.io/badge/mocha.js-323330?style=for-the-badge&logo=mocha&logoColor=Brown' alt='mocha' />
                        <img src='https://img.shields.io/badge/chai.js-323330?style=for-the-badge&logo=chai&logoColor=red' alt='chai' />
                    </div>
                    <h2>
                        Extras:
                    </h2>
                    <div className='skills-area'>
                        <img src='https://img.shields.io/badge/Trello-0052CC?style=for-the-badge&logo=trello&logoColor=white' alt='trello' />
                        <img src='https://img.shields.io/badge/Notion-000000?style=for-the-badge&logo=notion&logoColor=white' alt='notion' />
                        <img src='https://img.shields.io/badge/Miro-050038?style=for-the-badge&logo=Miro&logoColor=white' alt='miro' />
                        <img src='https://img.shields.io/badge/Microsoft_Office-D83B01?style=for-the-badge&logo=microsoft-office&logoColor=white' alt='microsoft office' />
                        <img src='https://img.shields.io/badge/Google%20Sheets-34A853?style=for-the-badge&logo=google-sheets&logoColor=white' alt='google sheets' />
                        <img src='https://img.shields.io/badge/Figma-F24E1E?style=for-the-badge&logo=figma&logoColor=white' alt='figma' />
                        <img src='https://img.shields.io/badge/Adobe%20Photoshop-31A8FF?style=for-the-badge&logo=Adobe%20Photoshop&logoColor=black' alt='photoshop' />
                        <img src='https://img.shields.io/badge/Adobe%20Lightroom-31A8FF?style=for-the-badge&logo=Adobe%20Lightroom&logoColor=white' alt='lightroom' />
                        <img src='https://img.shields.io/badge/Adobe%20InDesign-FF3366?style=for-the-badge&logo=Adobe%20InDesign&logoColor=white' alt='indesign' />
                        <img src='https://img.shields.io/badge/Adobe%20Illustrator-FF9A00?style=for-the-badge&logo=adobe%20illustrator&logoColor=white' alt='illustrator' />
                    </div>
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
                            <img alt='material ui' src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/materialui/materialui-original.svg" />
                        </div>
                    </div>
                </div>
            </div>
            <Loader type='pacman' />
        </>
    )
}

export default About