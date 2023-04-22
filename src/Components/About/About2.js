import React from 'react'
import { Parallax } from 'react-parallax'
import Loader from 'react-loaders'
import im3 from '../../assets/images/im3.jpg'

const About2 = () => {
  return (
    <>
      <Parallax className='parallax-image' bgImage={im3} bgImageAlt='portrait' strength={800} blur={{ min: -15, max: 15 }}>
          <div className='content'>
              <span className='img-txt'>A Little About Me</span>
          </div>
      </Parallax>
      <Loader type='ball-scale-ripple-multiple' />
    </>
  )
}

export default About2