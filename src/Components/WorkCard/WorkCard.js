import React from 'react'
import './WorkCard.scss'
import theBored from './assets/theBored.png'
import dokes from './assets/dokes.png'
import rancid from './assets/rancid.png'
import discoverIt from './assets/discoverIt.png'
import theNeoteric from './assets/theneoteric.png'

const WorkCard = () => {
    return (
        <div className='work-card-container'>
            <div>
                <a href='https://theneoteric.vercel.app/'><img src={theNeoteric} alt='discoverIt logo' /></a>
                <h2>The Neoteric</h2>
            </div>
            <div>
                <a href='https://discoverit2208.vercel.app/'><img src={discoverIt} alt='discoverIt logo' /></a>
                <h2>DiscoverIt</h2>
            </div>
            <div>
                <a href='https://the-bored.vercel.app/'><img src={theBored} alt='the bored logo' /></a>
                <h2>the Bored</h2>
            </div>
            <div>
                <a href='https://dokes.surge.sh/'><img src={dokes} alt='dokes logo' /></a>
                <h2>Dokes</h2>
            </div>
            <div>
                <a href='https://rancid-tomatillos-wheat.vercel.app/'><img src={rancid} alt='rancid logo' /></a>
                <h2>Rancid Tomatillos</h2>
            </div>


        </div>
    )
}

export default WorkCard