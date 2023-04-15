import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import './Work.scss'
import AnimatedLetters from '../AnimatedLetters/AnimatedLetters'
import Loader from 'react-loaders'
import theNeoteric from './appImages/theNeoteric.png'
import discoverIt from './appImages/discoverIt.png'
import dokes from './appImages/dokes.png'


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
      <div className='card-box'>
        <div className='card-details'>
          <a href='http://theneoteric.vercel.app'>
            <div className='workCard-container'>
              <h2>DiscoverIt</h2>
              <img src={discoverIt} alt='discoverIt app page' />
            </div>
          </a>
          <aside>
            the neoteric
          </aside>
        </div>

        <div className='card-details'>
          <a href='http://theneoteric.vercel.app'>
            <div className='workCard-container'>
              <h2>The Neoteric</h2>
              <img src={theNeoteric} alt='the neoteric app page' />
            </div>
          </a>
          <aside>
            the neoteric
          </aside>
        </div>

        <div className='card-details'>
          <a href='http://theneoteric.vercel.app'>
            <div className='workCard-container'>
              <h2>Dokes</h2>
              <img src={dokes} alt='dokes app page' />
            </div>
          </a>
          <aside>
            the neoteric
          </aside>
        </div>
      </div>
    </div>
    <Loader type='ball-scale-ripple-multiple' />
    </>
  )
}

export default Work