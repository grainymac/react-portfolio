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
  const jobArray = ['a', 'n', 'd', ' ', 'I',' ', 'a', 'm', ' ', 'a', ' ', 's', 'o', 'f', 't', 'w', 'a', 'r', 'e', '', 'd', 'e', 'v', 'e', 'l', 'o', 'p', 'e', 'r!']

  useEffect(() => {
    return setLetterClass('text-animate-hover')
  }, [])
  
  return (
    <>
      <div className='container home-page'>
        <div className='text-zone'>
          <h1>
            <span className={letterClass}>H</span>
            <span className={`${letterClass} _12`}>e</span>
            <span className={`${letterClass} _12`}>y</span>
            <span className={`${letterClass} _13`}></span>
            <span className={`${letterClass} _14`}>w</span>
            <span className={`${letterClass} _14`}>h</span>
            <span className={`${letterClass} _14`}>a</span>
            <span className={`${letterClass} _14`}>t</span>
            <span className={`${letterClass} _14`}>'s</span>
            <span className={`${letterClass} _14`}></span>
            <span className={`${letterClass} _14`}>u</span>
            <span className={`${letterClass} _14`}>p?!</span>
            <br />
            <span className={`${letterClass} _13`}>M</span>
            <span className={`${letterClass} _14`}>y</span>
            <span className={`${letterClass} _14`}></span>
            <span className={`${letterClass} _14`}>n</span>
            <span className={`${letterClass} _14`}>a</span>
            <span className={`${letterClass} _14`}>m</span>
            <span className={`${letterClass} _14`}>e</span>
            <span className={`${letterClass} _14`}></span>
            <span className={`${letterClass} _13`}>i</span>
            <span className={`${letterClass} _14`}>s</span>
          <img src={LogoTitle} alt='developer' className='logo-title'/>
          <AnimatedLetters letterClass={letterClass} strArray={nameArray} idx={15}/>
          <br />
          <AnimatedLetters letterClass={letterClass} strArray={jobArray} idx={22}/>
          </h1>
          <h2>Front-end Developer | Software Developer | Photographer | Musician | Graphic Designer | Tech-enthusiast | United States Air Force Veteran</h2>
          <div className='button-container'>
            <Link to='/contact' className='flat-button contact-me'>CONTACT ME</Link>
            <a href={resume} className='flat-button my-resume'>MY RESUME</a>
          </div>
        </div>
        <div className='logo-container'>
          <img src={Me} alt='ian mcintosh' className='photo' />
        </div>
      </div>
      <Loader type='ball-scale-ripple-multiple' />
    </>
  )
}

export default Home