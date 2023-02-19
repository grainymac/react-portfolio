import React, { useState, useEffect } from 'react'
import './Work.scss'
import AnimatedLetters from '../AnimatedLetters/AnimatedLetters'
import Loader from 'react-loaders'
import WorkCard from '../WorkCard/WorkCard'

const Work = () => {
  const [letterClass, setLetterClass] = useState('text-animate')

  useEffect(() => {
      setLetterClass('text-animate-hover')
  }, [])

  return (
    <>
    <div className='container work-page'>
      <div className='text-zone'>
      <h1>
        <AnimatedLetters letterClass={letterClass} strArray={['M', 'y', ' ', 'W', 'o', 'r', 'k']} idx={15} />
      </h1>
        <div className='work-container'>
          <div className='work-item'>
            <WorkCard />
          </div>
        </div>
      </div>
    </div>
    <Loader type='pacman' />
    </>
  )
}

export default Work