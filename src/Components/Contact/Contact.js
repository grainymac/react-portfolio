import React, { useState, useEffect, useRef } from 'react'
import './Contact.scss'
import Loader from 'react-loaders'
import AnimatedLetters from '../AnimatedLetters/AnimatedLetters'
import emailjs from '@emailjs/browser'

const Contact = () => {
    const [letterClass, setLetterClass] = useState('text-animate')
    const refForm = useRef()

    useEffect(() => {
        setLetterClass('text-animate-hover')
    }, [])

    const sendEmail = (event) => {
        event.preventDefault()

        emailjs
            .sendForm(
                'gmail',
                'template_j34068y',
                refForm.current,
                'service_smkz3xo'
            )
            .then(() => {
                    getAllByPlaceholderText('Message successfully sent!')
                    window.location.reload(false)
                },() => {
                    alert('Failed to send the message, please try again!')
                }
            )
    }

  return (
    <>
        <div className='container contact-page'>
            <div className='text-zone'>
                <h1>
                    <AnimatedLetters letterClass={letterClass} strArray={['C', 'o', 'n', 't', 'a', 'c', 't', ' ', 'm', 'e']} idx={15}/>
                </h1>
                <p>
                    I am interested in freelance opportunities, especially creative and ambitious projects. If you have any other requests or questions, please do not hesitate to get in touch with me via the form below.
                </p>
                <div className='contact-form'>
                    <form ref={refForm} onSubmit={sendEmail}>
                        <ul>
                            <li className='half'>
                                <input type='text' name='name' placeholder='Name' required />
                            </li>
                            <li className='half'>
                                <input type='email' name='email' placeholder='E-mail' required />
                            </li>
                            <li>
                                <input placeholder='Subject' type='text' name='subject' required />
                            </li>
                            <li>
                                <textarea placeholder='Message' name='message' required></textarea>
                            </li>
                            <li>
                                <input type='submit' className='flat-button' value='SEND' />
                            </li>
                        </ul>
                    </form>
                </div>
            </div>
        </div>
        <Loader type='pacman' />
    </>
  )
}

export default Contact