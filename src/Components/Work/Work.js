import React, { useState, useEffect } from 'react'
import './Work.scss'
import AnimatedLetters from '../AnimatedLetters/AnimatedLetters'
import Loader from 'react-loaders'


const Work = () => {
  const [letterClass, setLetterClass] = useState('text-animate')

  useEffect(() => {
      setLetterClass('text-animate-hover')
  }, [])

  return (
    <>
    <div className='container work-page'>
      <h1 className='work-header'>
        <AnimatedLetters letterClass={letterClass} strArray={['M', 'y', ' ', 'P', 'r', 'o', 'j', 'e', 'c', 't', 's']} idx={15} />
      </h1>
      <p></p>
    </div>
    <Loader type='ball-scale-ripple-multiple' />
    </>
  )
}

export default Work