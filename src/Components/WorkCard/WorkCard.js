import React from 'react'
import './WorkCard.scss'
import theBored from './assets/theBored.png'
import dokes from './assets/dokes.png'
import rancid from './assets/rancid.png'

const WorkCard = () => {
    return (
        <div className='work-card-container'>
            <img src={theBored} alt='the bored logo' />
            <h2>the Bored</h2>
        </div>
    )
}

export default WorkCard