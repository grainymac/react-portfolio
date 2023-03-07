import React, { useState, useEffect } from 'react'
import './Skills.scss'
import { faCircleCheck } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import AnimatedLetters from '../AnimatedLetters/AnimatedLetters'
import Loader from 'react-loaders'

import cypress from '../../assets/images/brand-cypress.svg'
import rd from '../../assets/images/responsive-design.svg'

const Skills = () => {
  const [letterClass, setLetterClass] = useState('text-animate')

  useEffect(() => {
    setLetterClass('text-animate-hover')
}, [])

  return (
    <div className='container experience-page'>
      <div className='text-zone'>
        <h1>
          <AnimatedLetters letterClass={letterClass} strArray={['M', 'y', ' ', 'S', 'k', 'i', 'l', 'l', 's']} idx={15} />
        </h1>
        <div className='experience-container'>
          <h2>Front-End Development</h2>
          <div className='experience-frontend'>
            <div className='skill-circle'>
              <img className='icon html' src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-plain.svg" alt='html icon'/>
            </div>
            <div className='skill-circle'>
              <img className='icon css' src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-plain.svg" alt='css icon'/>
            </div>
            <div className='skill-circle'>
              <img className='icon sass' src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sass/sass-original.svg" alt='sass icon'/>
            </div>
            <div className='skill-circle'>
              <img className='icon react' src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" alt='react icon'/>
            </div>
            <div className='skill-circle'>
              <img className='icon git' src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-plain.svg" alt='git icon'/>
            </div>
            <div className='skill-circle'>
              <img className='icon github' src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" alt='github icon'/>
            </div>
            <div className='skill-circle'>
              <img className='icon graphql' src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/graphql/graphql-plain.svg" alt='graphql icon'/>
            </div>
            <div className='skill-circle'>
              <img className='icon js' src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-plain.svg" alt='javascript icon'/>
            </div>
            <div className='skill-circle'>
              <img className='icon md' src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/markdown/markdown-original.svg" alt='markdown icon'/>
            </div>
            <div className='skill-circle'>
              <img className='icon next' src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-line.svg" alt='next.js icon'/>
            </div>
            <div className='skill-circle'>
              <img className='icon node' src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-plain.svg" alt='node.js icon'/>
            </div>
            <div className='skill-circle'>
              <img className='icon tailwind' src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg" alt='tailwind css icon'/>
            </div>
            <div className='skill-circle'>
              <img className='icon ps' src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/photoshop/photoshop-line.svg" alt='photoshop icon'/>
            </div>
            <div className='skill-circle'>
              <img className='icon trello' src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/trello/trello-plain.svg" alt='trello icon'/>
            </div>
            <div className='skill-circle'>
              <img className='icon ts' src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-plain.svg" alt='typescript icon'/>
            </div>
            <div className='skill-circle'>
              <img className='icon vscode' src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-plain.svg" alt='vscode icon'/>
            </div>
            <div className='skill-circle'>
              <img className='icon canva' src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/canva/canva-original.svg" alt='canva icon'/>
            </div>
            <div className='skill-circle'>
              <img className='icon circle' src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/circleci/circleci-plain.svg" alt='circleci icon'/>
            </div>
            <div className='skill-circle'>
              <img className='icon express' src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg" alt='express icon'/>
            </div>
            <div className='skill-circle'>
              <img className='icon' src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg" alt='figma icon'/>
            </div>
            <div className='skill-circle'>
              <img className='icon ai' src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/illustrator/illustrator-line.svg" alt='illustrator icon'/>
            </div>
            <div className='skill-circle'>
              <img className='icon mui' src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/materialui/materialui-original.svg" alt='material ui icon'/>
            </div>
            <div className='skill-circle'>
              <img className='icon gsap' src="https://cdn.worldvectorlogo.com/logos/gsap-greensock.svg" alt='gsap icon'/>
            </div>
            <div className='skill-circle'>
              <img className='icon cypress' src={cypress} alt='cypress icon'/>
            </div>
            <div className='skill-circle'>
              <img className='icon rd' src={rd} alt='responsive design icon'/>
            </div>
            
            {/* <section className='experience-content'>
              <article className='experience-details'>
                <FontAwesomeIcon className='experience-icon' icon={faCircleCheck} color='#fdd700' />
                <div>
                  <h4>HTML</h4>
                  <small className='text-light'>Experienced</small>
                </div>
              </article>
              <article className='experience-details'>
                <FontAwesomeIcon className='experience-icon' icon={faCircleCheck} color='#fdd700' />
                <div>
                  <h4>CSS</h4>
                  <small className='text-light'>Experienced</small>
                </div>
              </article>
              <article className='experience-details'>
                <FontAwesomeIcon className='experience-icon' icon={faCircleCheck} color='#fdd700' />
                <div>
                  <h4>SCSS</h4>
                  <small className='text-light'>Intermediate</small>
                </div>
              </article>
              <article className='experience-details'>
                <FontAwesomeIcon className='experience-icon' icon={faCircleCheck} color='#fdd700' />
                <div>
                  <h4>JavaScript</h4>
                  <small className='text-light'>Intermediate</small>
                </div>
              </article>
              <article className='experience-details'>
                <FontAwesomeIcon className='experience-icon' icon={faCircleCheck} color='#fdd700' />
                <div>
                  <h4>React.js</h4>
                  <small className='text-light'>Experienced</small>
                </div>
              </article>
              <article className='experience-details'>
                <FontAwesomeIcon className='experience-icon' icon={faCircleCheck} color='#fdd700' />
                <div>
                  <h4>React Router</h4>
                  <small className='text-light'>Intermediate</small>
                </div>
              </article>
              <article className='experience-details'>
                <FontAwesomeIcon className='experience-icon' icon={faCircleCheck} color='#fdd700' />
                <div>
                  <h4>React Native</h4>
                  <small className='text-light'>Beginner</small>
                </div>
              </article>
              <article className='experience-details'>
                <FontAwesomeIcon className='experience-icon' icon={faCircleCheck} color='#fdd700' />
                <div>
                  <h4>Styled Components</h4>
                  <small className='text-light'>Beginner</small>
                </div>
              </article>
              <article className='experience-details'>
                <FontAwesomeIcon className='experience-icon' icon={faCircleCheck} color='#fdd700' />
                <div>
                  <h4>Material UI</h4>
                  <small className='text-light'>Intermediate</small>
                </div>
              </article>
              <article className='experience-details'>
                <FontAwesomeIcon className='experience-icon' icon={faCircleCheck} color='#fdd700' />
                <div>
                  <h4>GSAP</h4>
                  <small className='text-light'>Intermediate</small>
                </div>
              </article>
              <article className='experience-details'>
                <FontAwesomeIcon className='experience-icon' icon={faCircleCheck} color='#fdd700' />
                <div>
                  <h4>GraphQL</h4>
                  <small className='text-light'>Beginner</small>
                </div>
              </article>
              <article className='experience-details'>
                <FontAwesomeIcon className='experience-icon' icon={faCircleCheck} color='#fdd700' />
                <div>
                  <h4>Git</h4>
                  <small className='text-light'>Intermediate</small>
                </div>
              </article>
              <article className='experience-details'>
                <FontAwesomeIcon className='experience-icon' icon={faCircleCheck} color='#fdd700' />
                <div>
                  <h4>Markdown</h4>
                  <small className='text-light'>Intermediate</small>
                </div>
              </article>
            </section> */}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Skills