import React, { useState, useEffect } from 'react'
import './Home.scss'
import LogoTitle from '../../assets/images/logo-s.png'
import { Link } from 'react-router-dom'
import AnimatedLetters from '../AnimatedLetters/AnimatedLetters'
import Loader from 'react-loaders'
import Me from '../../assets/images/me2.jpg'
import resume from '../../assets/ianMcIntoshResume.pdf'

const Home = () => {
  const [letterClass, setLetterClass] = useState('text-animate')
  const nameArray = ['a', 'n', ',']
  const jobArray = ['a', ' ', 's', 'o', 'f', 't', 'w', 'a', 'r', 'e', '', 'd', 'e', 'v', 'e', 'l', 'o', 'p', 'e', 'r']

  useEffect(() => {
    return setLetterClass('text-animate-hover')
  }, [])
  
  return (
    <>
      <div className='container home-page'>
        <div className='text-zone'>
          <h1>
            <span className={letterClass}>H</span>
            <span className={`${letterClass} _12`}>i,</span>
            <br />
            <span className={`${letterClass} _13`}>I</span>
            <span className={`${letterClass} _14`}>'m</span>
          <img src={LogoTitle} alt='developer' className='logo-title'/>
          <AnimatedLetters letterClass={letterClass} strArray={nameArray} idx={15}/>
          <br />
          <AnimatedLetters letterClass={letterClass} strArray={jobArray} idx={22}/>
          </h1>
          <h2>Front-end Developer | Photographer | Musician</h2>
          <Link to='/contact' className='flat-button'>CONTACT ME</Link>
          <a href={resume} className='flat-button'>MY RESUME</a>
        </div>
        <div className='logo-container'>
          <img src={Me} alt='ian mcintosh' className='photo' />
        </div>
      </div>
      <Loader type='pacman' />
    </>
  )
}

export default Home