import React, { useState, useEffect } from 'react'
import './Work.scss'
import AnimatedLetters from '../AnimatedLetters/AnimatedLetters'
import Loader from 'react-loaders'

import discoverIt from './assets/discoverIt.png'

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
          <h3>HTML, SCSS, JavaScript, React, GraphQL</h3>
          <p>DiscoverIt is an exciting new travel app designed to help users explore different cities worldwide while channeling their inner Carmen Sandiego. With its sleek design and interactive features, this app makes travel planning fun and adventurous.</p>
        </div>
      </div>
    </div>
    <Loader type='ball-scale-ripple-multiple' />
    </>
  )
}

export default Work