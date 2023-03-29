import React, { useState, useEffect } from 'react'
import './Work.scss'
import AnimatedLetters from '../AnimatedLetters/AnimatedLetters'
import Loader from 'react-loaders'

import discoverIt from './assets/discoverIt.png'
import theBored from './assets/theBored.png'
import theNeoteric from './assets/theNeoteric.png'
import dokes from './assets/dokes.png'
import cypress from '../../assets/images/brand-cypress.svg'

const Work = () => {
  const [letterClass, setLetterClass] = useState('text-animate')

  useEffect(() => {
      setLetterClass('text-animate-hover')
  }, [])

  return (
    <>
    <div className='container work-page'>
      <div className='work-container'>
        <img src={discoverIt} alt='discoverIt screenshot' />
        <div className='work-info'>
          <h2 className='work-title'>DiscoverIt</h2>
          <div className='tech-container'>
            <img className='work-icons' title='html' src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-plain.svg" alt='html icon'/>
            <img className='work-icons' title='css' src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-plain.svg" alt='css icon'/>
            <img className='work-icons' src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-plain.svg" alt='javascript icon'/>
            <img className='work-icons' src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" alt='react icon'/>
            <img className='work-icons' src={cypress} alt='cypress icon'/>
            <img className='work-icons' src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/graphql/graphql-plain.svg" alt='graphql icon'/>
            <img className='work-icons' src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/rails/rails-plain.svg" alt='rails' />
            <img className='work-icons' src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/ruby/ruby-original.svg" alt='ruby' />
            <img className='work-icons' src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg" alt='postgresql' />
          </div>
          <p>DiscoverIt is an exciting new travel app designed to help users explore different cities worldwide while channeling their inner Carmen Sandiego. With its sleek design and interactive features, this app makes travel planning fun and adventurous.</p>
        </div>
      </div>
      <div className='work-container'>
        <img src={theBored} alt='the bored screenshot' />
        <div className='work-info'>
          <h2 className='work-title'>The Bored</h2>
          <div className='tech-container'>
            <img className='work-icons' title='html' src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-plain.svg" alt='html icon'/>
            <img className='work-icons' title='css' src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-plain.svg" alt='css icon'/>
            <img className='work-icons' src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-plain.svg" alt='javascript icon'/>
            <img className='work-icons' src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" alt='react icon'/>
            <img className='work-icons' src={cypress} alt='cypress icon'/>
          </div>
          <p>theBored is an activity generator application built utilizing React, Router, and Material UI. Cypress end to end testing was used on DOM elements and content to test the user experience of the application.</p>
        </div>
      </div>
      <div className='work-container'>
        <img src={theNeoteric} alt='discoverIt screenshot' />
        <div className='work-info'>
          <h2 className='work-title'>The Neoteric</h2>
          <div className='tech-container'>
            <img className='work-icons' title='html' src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-plain.svg" alt='html icon'/>
            <img className='work-icons' title='css' src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-plain.svg" alt='css icon'/>
            <img className='work-icons' src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-plain.svg" alt='javascript icon'/>
            <img className='work-icons' src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" alt='react icon'/>
            <img className='work-icons' src={cypress} alt='cypress icon'/>
          </div>
          <p>The Neoteric is a news article application that has a sleek duochrome style similar to reading articles on a Kindle. You can search on the main page for articles or go to the categories on the NavBar for a more filtered story feed.</p>
        </div>
      </div>
      <div className='work-container'>
        <img src={dokes} alt='discoverIt screenshot' />
        <div className='work-info'>
          <h2 className='work-title'>Dokes</h2>
          <div className='tech-container'>
            <img className='work-icons' title='html' src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-plain.svg" alt='html icon'/>
            <img className='work-icons' title='css' src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-plain.svg" alt='css icon'/>
            <img className='work-icons' src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-plain.svg" alt='javascript icon'/>
            <img className='work-icons' src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" alt='react icon'/>
            <img className='work-icons' src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/materialui/materialui-original.svg" alt='material ui icon'/>
            <img className='work-icons' src="https://cdn.worldvectorlogo.com/logos/gsap-greensock.svg" alt='gsap icon'/>
            <img className='work-icons' src={cypress} alt='cypress icon'/>
          </div>
          <p>Dokes is a dad joke application built utilizing React and Router, Cypress testing of DOM elements and content, as well as our new tools of MUI and GSAP we have decided to delve into for this project.</p>
        </div>
      </div>
    </div>
    <Loader type='ball-scale-ripple-multiple' />
    </>
  )
}

export default Work