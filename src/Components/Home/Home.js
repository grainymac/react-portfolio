import React from 'react'
import './Home.scss'
import LogoTitle from '../../assets/images/logo-s.png'

const Home = () => {
  return (
    <div className='container home-page'>
        <div className='text-zone'>
            <h1>Hi, <br/> I'm
            <img src={} alt='developer' />
            lobodan
            <br />
            software developer
            </h1>
            <h2>Front-End Developer/ Photographer / Musician</h2>
            <Link to='/contact' className='flat-button'>CONTACT ME</Link>
        </div>
    </div>
  )
}

export default Home