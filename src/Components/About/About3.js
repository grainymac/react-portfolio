import React from 'react'
import { Parallax } from 'react-parallax'

import im2 from '../../assets/images/im2.jpg'

const About3 = () => {
  return (
    <Parallax className='parallax-image' bgImage={im2} bgImageAlt='portrait' strength={800} blur={{ min: -15, max: 15 }}>
    </Parallax>
  )
}

export default About3