import './About.css'
import React, { useEffect } from 'react'
import ABOUT from './../../assets/myPhoto2.png'
import Aos from 'aos';
import 'aos/dist/aos.css';

const About = () => {
    useEffect(()=>{
        Aos.init({duration: 2000});
    }, []);

    return (
        <section id='about' data-aos="zoom-in">
            <h1>About</h1>
            <div className="about-container">
                <div className="about-img">
                    <img src={ABOUT} alt="img not displayed" />
                </div>
                <div className="about-me-text">
                    <h2>Developer</h2>
                    <p>
                        Hi there I'am Gaurav Rathod, I have completed my bachelors from Sknsits, Lonavala Pune. I am a front-end web developer I can provide clean code and pixel perfect design. I thrive on transforming innovative ideas into reality through the power of code. With a strong foundation in Java programming, I have honed my skills to excel in web development and database management. My goal is to contribute my technical proficiency and problem-solving abilities to dynamic projects.</p>
                </div>
            </div>
        </section>
    )
}

export default About