import React, { useState } from 'react'
import './Home.scss'
import LogoTitle from '../../assets/images/logo-s.png'
import { Link } from 'react-router-dom'
import AnimatedLetters from '../AnimatedLetters/AnimatedLetters'

const Home = () => {
  const [letterClass, setLetterClass] = useState('text-animate')
  const nameArray = ['a', 'n']
  const jobArray = ['s', 'o', 'f', 't', 'w', 'a', 'r', 'e', '', 'd', 'e', 'v', 'e', 'l', 'o', 'p', 'e', 'r']

  return (
    <div className='container home-page'>
      <div className='text-zone'>
        <h1>
          <span clasName={letterClass}>H</span>
          <span clasName={`${letterClass} _12`}>i,</span>
          <br />
          <span clasName={`${letterClass} _13`}>I</span>
          <span clasName={`${letterClass} _14`}>'m</span>
        <img src={LogoTitle} alt='developer' />
        <AnimatedLetters letterClass={letterClass} strArray={nameArray} index={15}/>
        <br />
        <AnimatedLetters letterClass={letterClass} strArray={jobArray} index={22}/>
        </h1>
        <h2>Front-end Developer | Photographer | Musician</h2>
        <Link to='/contact' className='flat-button'>CONTACT ME</Link>
      </div>
    </div>
  )
}

export default Home