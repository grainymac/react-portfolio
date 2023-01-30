import React from 'react'
import './Sidebar.scss'
import { Link, NavLink } from 'react-router-dom'
import LogoS from '../../assets/images/logo-s.png'
import LogoSubtitle from '../../assets/images/logo_sub.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome, faEnvelope, faUser, faLinkedin, faGithub, faTwitter } from '@fortawesome/free-solid-svg-icons'
import { faTwitter } from '@fortawesome/free-brands-svg-icons'

const Sidebar = () => {
  return (
    <div className='nav-bar'>
        <Link className='logo' to='/'>
            <img src={LogoS} alt='logo' />
            <img className='sub-logo' src={LogoSubtitle} alt='logo subtitle' />
        </Link>
        <nav>
            <NavLink exact='true' activeclassname='active' to='/'>
                <FontAwesomeIcon icon={faHome} color='#4d4d4e' />
            </NavLink>        
            <NavLink exact='true' activeclassname='active' to='/about' className='about-link'>
                <FontAwesomeIcon icon={faUser} color='#4d4d4e' />
            </NavLink>        
            <NavLink exact='true' activeclassname='active' className='contact-link' to='/'>
                <FontAwesomeIcon icon={faEnvelope} color='#4d4d4e' />
            </NavLink>        
        </nav>
        <ul>
            <li>
                <a target='_blank' rel='noreferrer' href='https://www.linkedin.com/in/ianmac87/'>
                    <FontAwesomeIcon icon={faLinkedin} color='#4d4d4e' />
                </a>
            </li>
            <li>
                <a target='_blank' rel='noreferrer' href='https://github.com/grainymac'>
                    <FontAwesomeIcon icon={faGithub} color='#4d4d4e' />
                </a>
            </li>
            <li>
                <a target='_blank' rel='noreferrer' href='https://www.twitter.com/ianmac__'>
                    <FontAwesomeIcon icon={faTwitter} color='#4d4d4e' />
                </a>
            </li>
        </ul>
    </div>
  )
}

export default Sidebar