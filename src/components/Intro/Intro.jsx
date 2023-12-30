import React, { useEffect, useState } from 'react'
import './Intro.css';
import bg from './../../assets/myPhoto2.png';
import btnImg from './../../assets/downloadgif.gif';
import PDF from './../../assets/Gaurav_Resume.pdf';

const Intro = () => {
    const [text, setText] = useState("Web Developer");
    
    // const textLoad = () => {
    //     setTimeout(() => {
    //         setText("Java Developer");

    //         // After Java Developer, restart the cycle with Web Developer
    //         setTimeout(() => {
    //             setText("Web Developer");
    //             // Start the next loop after completing the current cycle
    //             textLoad();
    //         }, 4000); // Adjusted timing for Web Developer
    //     }, 4000); // Adjusted timing for Java Developer
    // };

    useEffect(() => {
        const textLoad = () => {
            setTimeout(() => {
                setText("Java Developer");
    
                // After Java Developer, restart the cycle with Web Developer
                setTimeout(() => {
                    setText("Web Developer");
                    // Start the next loop after completing the current cycle
                    textLoad();
                }, 4000); // Adjusted timing for Web Developer
            }, 4000); // Adjusted timing for Java Developer
        };
    
        // Start the initial animation loop
        textLoad();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
      
    return (
        <section id="intro">
            <div className="introContent">
                <span className="hello">Hello <span className='emoji'>👋</span></span>
                <span className="introText">I,m
                    <span className="introName"> Gaurav</span><br /><span className='autoType'>{text}</span>
                </span>
                <p className="introPara">Welcome to my digital space, where I showcase my skills, projects, and commitment to delivering 
                high-quality solutions.</p>
                <a href={PDF}><button className="btn"><img src={btnImg} alt="download" className="btnImg" />Resume</button></a>
            </div>
            <img src={bg} alt="Profile" className="bg" />
        </section>
    )
}

export default Intro;