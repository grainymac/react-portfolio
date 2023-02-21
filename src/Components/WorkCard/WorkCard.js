import React from 'react'
import './WorkCard.scss'
import theBored from './assets/theBored.png'
import dokes from './assets/dokes.png'
import rancid from './assets/rancid.png'

const WorkCard = () => {
    return (
        <div className='work-card-container'>
            <div>
                <a href=''><img src={rancid} alt='rancid logo' /></a>
                <h2>DiscoverIt</h2>
            </div>
            <div>
                <a href=''><img src={theBored} alt='the bored logo' /></a>
                <h2>the Bored</h2>
            </div>
            <div>
                <a href=''><img src={dokes} alt='dokes logo' /></a>
                <h2>Dokes</h2>
            </div>
            <div>
                <a href=''><img src={rancid} alt='rancid logo' /></a>
                <h2>Rancid Tomatillos</h2>
            </div>
            <div>
                <a href=''><img src={rancid} alt='rancid logo' /></a>
                <h2>Hotel OverLook</h2>
            </div>
            <div>
                <a href=''><img src={rancid} alt='rancid logo' /></a>
                <h2>What's Cookin'</h2>
            </div>

        </div>
    )
}

export default WorkCard