import React, { useState, useEffect } from 'react'
import './Experience.scss'
import { faCircleCheck } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import AnimatedLetters from '../AnimatedLetters/AnimatedLetters'
import Loader from 'react-loaders'

const Experience = () => {
  const [letterClass, setLetterClass] = useState('text-animate')

  useEffect(() => {
    setLetterClass('text-animate-hover')
}, [])

  return (
    <div className='container experience-page'>
      <div className='text-zone'>
        <h1>
          <AnimatedLetters letterClass={letterClass} strArray={['M', 'y', ' ', 'E', 'x', 'p', 'e', 'r', 'i', 'e', 'n', 'c', 'e']} idx={15} />
        </h1>
        <div className='experience-container'>
          <div className='experience-frontend'>
            <h2>Front-End Development</h2>
            <section className='experience-content'>
              <article className='experience-details'>
                <FontAwesomeIcon icon={faCircleCheck} color='#4d4d4e' />
                <div>
                  <h4>HTML</h4>
                  <small className='text-light'>Experienced</small>
                </div>
              </article>
              <article className='experience-details'>
                <FontAwesomeIcon icon={faCircleCheck} color='#4d4d4e' />
                <div>
                  <h4>CSS</h4>
                  <small className='text-light'>Experienced</small>
                </div>
              </article>
              <article className='experience-details'>
                <FontAwesomeIcon icon={faCircleCheck} color='#4d4d4e' />
                <div>
                  <h4>JavaScript</h4>
                  <small className='text-light'>Intermediate</small>
                </div>
              </article>
              <article className='experience-details'>
                <FontAwesomeIcon icon={faCircleCheck} color='#4d4d4e' />
                <div>
                  <h4>React.js</h4>
                  <small className='text-light'>Experienced</small>
                </div>
              </article>
              <article className='experience-details'>
                <FontAwesomeIcon icon={faCircleCheck} color='#4d4d4e' />
                <div>
                  <h4>React Router</h4>
                  <small className='text-light'>Intermediate</small>
                </div>
              </article>
              <article className='experience-details'>
                <FontAwesomeIcon icon={faCircleCheck} color='#4d4d4e' />
                <div>
                  <h4>React Native</h4>
                  <small className='text-light'>Beginner</small>
                </div>
              </article>
              <article className='experience-details'>
                <FontAwesomeIcon icon={faCircleCheck} color='#4d4d4e' />
                <div>
                  <h4>Express.js</h4>
                  <small className='text-light'>Beginner</small>
                </div>
              </article>
            </section>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Experience