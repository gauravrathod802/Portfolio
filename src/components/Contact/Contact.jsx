import React, { useRef } from 'react'
import './Contact.css'
import Linkedin from './../../assets/linkedin.png'
import Github from './../../assets/github.png';
import Hackerrank from './../../assets/hackerrank.png';
import Instagram from './../../assets/instagram.png';
import emailjs from '@emailjs/browser';


const Contact = () => {
    const form = useRef();
    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_3v1k95g', 'template_q4ul976', form.current, 'aLBmfwpusrHEp-KeM')
            .then((result) => {
                console.log(result.text);
                alert("Email sent");
            }, (error) => {
                console.log(error.text);
            });
    };
    return (
        <section id='contactPage'>
            <div id="contact">
                <h1 className="contactPageTitle">Contact Me</h1>
                <span className="contactDesc">Please fill out this form below to  discuss any work opportunities.</span>
                <form className="contactForm" ref={form} onSubmit={sendEmail}>
                    <input type="text" className="name" placeholder='Your name' name="your_name" />
                    <input type="text" className="email" placeholder='Your Email' name="your_email" />
                    <textarea name="message" rows="5" className="msg" placeholder='Your Message'></textarea>
                    <button className="submitBtn" value='Send' type='submit'>Submit</button>
                    <div className="links">
                        <a href="https://www.linkedin.com/in/gaurav-rathod-295547213/"> <img src={Linkedin} alt="" className="link" /></a>

                        <a href="https://github.com/gauravrathod802"><img src={Github} alt="" className="link" /></a>

                        <a href="https://www.hackerrank.com/profile/gauravrathod802"><img src={Hackerrank} alt="" className="link" /></a>

                        <a href="#123"><img src={Instagram} alt="" className="link" /></a>
                    </div>
                </form>
            </div>
        </section>
    )
}

export default Contact;