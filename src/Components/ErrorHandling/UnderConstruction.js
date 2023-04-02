import React from 'react'
import { Link } from 'react-router-dom'

const UnderConstruction = () => {
  return (
    <div className='underConstruction-container'>
        <h2 className='underConstruction-title'>This page is under construction!<p>Please click the button below to go back home.</p></h2>
        <Link to='/'><button className='homeButton'>HOME</button></Link>
    </div>
)
}

export default UnderConstruction