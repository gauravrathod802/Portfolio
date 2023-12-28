import React from 'react'
import './Intro.css';
// import {Link} from 'react-scroll';
import bg from './../../assets/about.png';
import btnImg from './../../assets/downloadgif.gif';
import PDF from './../../assets/Gaurav_Resume.pdf';

const Intro = () => {
    return (
        <section id="intro">
            <div className="introContent">
                <span className="hello">Hello,</span>
                <span className="introText">I,m
                <span className="introName"> Gaurav</span><br />Website Developer 
                </span>
                <p className="introPara">I am a skilled web developer with experience in creating <br /> web sites.</p>
                {/* <Link><a href={PDF}><button className="btn"><img src={btnImg} alt="Hire" className="btnImg" />Resume</button></a></Link> */}
                <a href={PDF}><button className="btn"><img src={btnImg} alt="download" className="btnImg" />Resume</button></a>
            </div>
            <img src={bg} alt="Profile" className="bg" />
        </section>        
    )
}

export default Intro;