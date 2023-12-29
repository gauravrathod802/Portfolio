import React, { useRef, useState } from 'react'
import './Contact.css'
import Linkedin from './../../assets/linkedin.png'
import Github from './../../assets/github.png';
import Hackerrank from './../../assets/hackerrank.png';
import Instagram from './../../assets/instagram.png';
import emailjs from '@emailjs/browser';
import Swal from 'sweetalert2';
import Loading from './../../assets/loadinggif.gif'

const Contact = () => {
    const form = useRef();
    const [loading, setLoading] = useState(false);

    const sendEmail = (e) => {
        e.preventDefault();

        const name = form.current.your_name.value;
        const email = form.current.your_email.value;
        const message = form.current.message.value;

        if (!name || !email || !message) {
            Swal.fire({
                title: "Please fill out all required fields.",
                icon: "warning",
                confirmButtonColor: "#03A9F4",
            });
            return;
        }

        setLoading(true);

        emailjs.sendForm('service_3v1k95g', 'template_q4ul976', form.current, 'aLBmfwpusrHEp-KeM')
            .then((result) => {
                console.log(result.text);
                Swal.fire({
                    title: "Message Sent Successfully!",
                    icon: "success",
                    confirmButtonColor: "#03A9F4",
                });
                form.current.reset();

            }, (error) => {
                console.log(error.text);
                Swal.fire({
                    title: "Message Sent Successfully!",
                    icon: "error",
                    confirmButtonColor: "red"
                });
            }).finally(() => {
                // Re-enable the submit button and set loading to false
                setLoading(false);
            });
    };
    return (
        <section id='contactPage'>
            <div id="contact">
                <h1 className="contactPageTitle">Contact Me</h1>
                <span className="contactDesc">I'm always open to exciting opportunities and collaborations. Connect with me to discuss how my skills can contribute to your projects or team.</span>
                <form className="contactForm" ref={form} onSubmit={sendEmail}>
                    <input type="text" className="name" placeholder='Your name' name="your_name" required />
                    <input type="text" className="email" placeholder='Your Email' name="your_email" required />
                    <textarea name="message" rows="5" className="msg" placeholder='Your Message' required></textarea>
                    {/* <button className="submitBtn" value='Send' type='submit'>Submit</button> */}

                    <button className="submitBtn" type='submit' disabled={loading}>
                        {loading ? (
                            <div className="loading-container">
                                <img src={Loading} alt="Loading" className="loading-image" />
                            </div>
                        ) : 'Submit'}
                    </button>


                    {/* Icons */}
                    <div className="links">
                        <a href="https://www.linkedin.com/in/gaurav-rathod-295547213/"> <img src={Linkedin} alt="" className="link" /></a>
                        <a href="https://github.com/gauravrathod802"><img src={Github} alt="" className="link" /></a>
                        <a href="https://www.hackerrank.com/profile/gauravrathod802"><img src={Hackerrank} alt="" className="link" /></a>
                        <a href="https://www.instagram.com/gaurav__rathod1/"><img src={Instagram} alt="" className="link" /></a>
                    </div>
                </form>
            </div>
        </section>
    )
}

export default Contact;