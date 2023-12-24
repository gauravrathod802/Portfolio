import React from 'react'
import './Contact.css'
import Linkedin from './../../assets/linkedin.png'
import Github from './../../assets/github.png';
import Hackerrank from './../../assets/hackerrank.png';
import Instagram from './../../assets/instagram.png';

const Contact = () => {
    return (
        <section id='contactPage'>
            <div id="contact">
                <h1 className="contactPageTitle">Contact Me</h1>
                <span className="contactDesc">Please fill out this form below to  discuss any work opportunities.</span>
                <form className="contactForm">
                    <input type="text" className="name" placeholder='Your name'/>
                    <input type="text" className="email" placeholder='Your Email' />
                    <textarea name="message" rows="5" className="msg" placeholder='Your Message'></textarea>
                    <button className="submitBtn" value='Send' type='submit'>Submit</button>
                    <div className="links">
                        <img src={Linkedin} alt="" className="link" />

                        <img src={Github} alt="" className="link" />

                        <img src={Hackerrank} alt="" className="link" />

                        <img src={Instagram} alt="" className="link" />
                    </div>
                </form>
            </div>
        </section>
    )
} 

export default Contact