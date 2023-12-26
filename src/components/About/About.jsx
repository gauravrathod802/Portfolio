import './About.css'
import React from 'react'
import ABOUT from './../../assets/about.png'

const About = () => {
    return (
        <section id='about'>
            <h1>About</h1>
            <div className="about-container">
                <div className="about-img">
                    <img src={ABOUT} alt="" />
                </div>
                <div className="about-me-text">
                    <h1>Developer</h1>
                    <p>
                        Hi there I'am Gaurav Rathod, i have completed my bachelors from Sknsits, Lonavala pune. I am a front-end web developer I can provide clean code and pixel perfect design. I also make the website more & more interactive. I can provide clean code and pixel perfect design. I also make the website more & more interactive with web animations.A responsive design makes your website accessible to all users, regardless of their device.</p>
                </div>
            </div>
        </section>
    )
}

export default About