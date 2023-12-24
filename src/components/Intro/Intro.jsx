import React from 'react'
import './Intro.css';
import {Link} from 'react-scroll';
import bg from './../../assets/image.png';
import btnImg from './../../assets/hireme.png';

const Intro = () => {
    return (
        <section id="intro">
            <div className="introContent">
                <span className="hello">Hello,</span>
                <span className="introText">I,m
                <span className="introName"> Gaurav</span><br />Website Developer 
                </span>
                <p className="introPara">I am a skilled web developer with experience in creating <br /> web sites.</p>
                <Link><button className="btn"><img src={btnImg} alt="Hire" className="btnImg" />Hire Me</button></Link>
            </div>
            <img src={bg} alt="Profile" className="bg" />
        </section>        
    )
}

export default Intro;