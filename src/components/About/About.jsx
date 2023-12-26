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
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum earum vitae repudiandae nobis voluptates sit veritatis quo quas ex ullam perspiciatis quam animi temporibus, odio ad adipisci, odit deleniti dignissimos? Lorem ipsum dolor sit amet, consectetur adipisicing elit. Velit quisquam, esse est accusamus facere rem id laboriosam culpa cumque? Magni provident voluptates aspernatur nobis minima quisquam numquam voluptate, sint earum unde aut, quasi quo fugiat architecto quibusdam odit repudiandae veritatis!</p>
                </div>
            </div>
        </section>
    )
}

export default About