import React from 'react'
import '../Styles/Contact.css'
import vegthali from '../Assets/vegthali.jpg'

const Contact = () => {
    return (
        <div className='contact'>
            <div className="leftSide" style={{ backgroundImage: `url(${vegthali})` }}>  </div>
            <div className="rightSide">
                <h1>Contact Us</h1>
                <form action="POST" id='contact-form'>
                    <label htmlFor="name">Name</label>
                    <input type="text" name="" id="name" placeholder='Enter your Name' />
                    <label htmlFor="email">Email</label>
                    <input type="email" name="" id="email" placeholder='Enter email address' />
                    <label htmlFor="message">Message</label>
                    <textarea name="" id="message" cols="30" rows="10" placeholder='Enter your message'></textarea>
                    <button type='submit'>Send Message</button>
                </form>
            </div>
        </div>
    )
}

export default Contact
