import React from 'react'
import './Work.scss'
import AnimatedLetters from '../AnimatedLetters/AnimatedLetters'
import Loader from 'react-loaders'


const Work = () => {
  return (
    <>
    <div className='work-page'>
      <h1>
        <AnimatedLetters letterClass={letterClass} strArray={['M', 'y', ' ', 'W', 'o', 'r', 'k']} idx={15} />
      </h1>
      <div className='work-container'>
        <div className='work-item'>

        </div>
      </div>
    </div>
    <Loader type='pacman' />
    </>
  )
}

export default Work