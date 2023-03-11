import React, { useState, useEffect } from 'react'
import './Skills.scss'
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
    <>
      <div className='container experience-page'>
        <div className='text-zone skill-zone'>
          <h1>
            <AnimatedLetters letterClass={letterClass} strArray={['M', 'y', ' ', 'S', 'k', 'i', 'l', 'l', 's']} idx={15} />
          </h1>
          <div className='experience-container'>
            <h2>Front-End Development</h2>
            <div className='experience-frontend'>

              <div className='skill-circle'>
                <img className='icon html' title='html' src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-plain.svg" alt='html icon'/>
                <p className='display-text'>HTML</p>
              </div>
              <div className='skill-circle'>
                <img className='icon css' title='css' src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-plain.svg" alt='css icon'/>
                <p className='display-text'>CSS</p>
              </div>
              <div className='skill-circle'>
                <img className='icon sass' src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sass/sass-original.svg" alt='sass icon'/>
                <p className='display-text'>SCSS</p>
              </div>
              <div className='skill-circle'>
                <img className='icon tailwind' src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg" alt='tailwind css icon'/>
                <p className='display-text'>Tailwind CSS</p>
              </div>
              <div className='skill-circle'>
                <img className='icon mui' src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/materialui/materialui-original.svg" alt='material ui icon'/>
                <p className='display-text'>Material UI</p>
              </div>
              <div className='skill-circle'>
                <img className='icon js' src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-plain.svg" alt='javascript icon'/>
                <p className='display-text'>JavaScript</p>
              </div>
              <div className='skill-circle'>
                <img className='icon ts' src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-plain.svg" alt='typescript icon'/>
                <p className='display-text'>Typescript</p>
              </div>
              <div className='skill-circle'>
                <img className='icon react' src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" alt='react icon'/>
                <p className='display-text'>React</p>
              </div>
              <div className='skill-circle'>
                <img className='icon next' src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-line.svg" alt='next.js icon'/>
                <p className='display-text'>Next.js</p>
              </div>
              <div className='skill-circle'>
                <img className='icon node' src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-plain.svg" alt='node.js icon'/>
                <p className='display-text'>Node.js</p>
              </div>
              <div className='skill-circle'>
                <img className='icon graphql' src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/graphql/graphql-plain.svg" alt='graphql icon'/>
                <p className='display-text'>GraphQL</p>
              </div>
              <div className='skill-circle'>
                <img className='icon gsap' src="https://cdn.worldvectorlogo.com/logos/gsap-greensock.svg" alt='gsap icon'/>
                <p className='display-text'>GSAP</p>
              </div>
              <div className='skill-circle'>
                <img className='icon cypress' src={cypress} alt='cypress icon'/>
                <p className='display-text'>Cypress</p>
              </div>
              <div className='skill-circle'>
                <img className='icon express' src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg" alt='express icon'/>
                <p className='display-text'>Express.js</p>
              </div>
              <div className='skill-circle'>
                <img className='icon circle' src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/circleci/circleci-plain.svg" alt='circleci icon'/>
                <p className='display-text'>CircleCI</p>
              </div>
              <div className='skill-circle'>
                <img className='icon github' src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" alt='github icon'/>
                <p className='display-text'>GitHub</p>
              </div>
              <div className='skill-circle'>
                <img className='icon git' src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-plain.svg" alt='git icon'/>
                <p className='display-text'>Git</p>
              </div>
              <div className='skill-circle'>
                <img className='icon md' src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/markdown/markdown-original.svg" alt='markdown icon'/>
                <p className='display-text'>Markdown</p>
              </div>
              <div className='skill-circle'>
                <img className='icon ps' src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/photoshop/photoshop-line.svg" alt='photoshop icon'/>
                <p className='display-text'>Photoshop</p>
              </div>
              <div className='skill-circle'>
                <img className='icon ai' src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/illustrator/illustrator-line.svg" alt='illustrator icon'/>
                <p className='display-text'>Illustrator</p>
              </div>
              <div className='skill-circle'>
                <img className='icon trello' src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/trello/trello-plain.svg" alt='trello icon'/>
                <p className='display-text'>Trello</p>
              </div>
              <div className='skill-circle'>
                <img className='icon canva' src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/canva/canva-original.svg" alt='canva icon'/>
                <p className='display-text'>Canva</p>
              </div>
              <div className='skill-circle'>
                <img className='icon' src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg" alt='figma icon'/>
                <p className='display-text'>Figma</p>
              </div>
              <div className='skill-circle'>
                <img className='icon vscode' src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-plain.svg" alt='vscode icon'/>
                <p className='display-text'>VSCode</p>
              </div>
              <div className='skill-circle'>
                <img className='icon rd' src={rd} alt='responsive design icon'/>
                <p className='display-text'>Responsive Design</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Loader type='pacman' />
    </>

  )
}

export default Skills