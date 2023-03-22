import React from 'react'
import { Parallax } from 'react-parallax'

import im4 from '../../assets/images/im4.jpg'

const About4 = () => {
  return (
    <Parallax className='parallax-image' bgImage={im4} bgImageAlt='portrait' strength={900} blur={{ min: -15, max: 15 }}>
    </Parallax>
  )
}

export default About4