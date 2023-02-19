import React from 'react'
import './WorkCard.scss'
import theBored from './assets/theBored.png'
import dokes from './assets/dokes.png'
import rancid from './assets/rancid.png'

const WorkCard = () => {
    return (
        <div className='work-card-container'>
            <div>
                <img src={theBored} alt='the bored logo' />
                <h2>the Bored</h2>
            </div>
        </div>
    )
}

export default WorkCard