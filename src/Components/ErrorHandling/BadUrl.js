import React from 'react'
import { Link } from 'react-router-dom'

const BadUrl = () => {
  return (
    <div className='badUrl-container'>
        <h2 className='badUrl-title'>You are on the wrong page!<p>Please click the button below to go back home.</p></h2>
        <Link to='/'><button className='homeButton'>HOME</button></Link>
    </div>
)
}

export default BadUrl