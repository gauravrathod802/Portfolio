import './Project.css'
import React from 'react'
import Project1 from './../../assets/project1.PNG';
import Project2 from './../../assets/project2.PNG';
import Project3 from './../../assets/project3.PNG';
import Project4 from './../../assets/project4.PNG';

export const Project = () => {

    return (
        <div className='project'>
            <h1>Projects</h1>
            <p>Some of my most recent works.</p>

            <div className="work-container">
                <div className="project-container">
                    <div className="project-card">
                        <img src={Project1} alt="project1" />
                        <h2 className='project-title'>Stone Paper Scissors</h2>
                        <div className="pro-details">
                            <p>2 Player game build using HTML, CSS, and Javascript.</p>
                            <div className="pro-btns">
                                <a href="https://gauravrathod802.github.io/Stone-Paper-Scissors-Game/"><button className='btn'>View</button></a>
                                <a href="https://github.com/gauravrathod802/Stone-Paper-Scissors-Game"><button className='btn'>Source</button></a>
                            </div>
                        </div>
                    </div>

                    {/* 2 */}

                    <div className="project-card">
                        <img src={Project2} alt="project2" />
                        <h2 className='project-title'>E-Commerce</h2>
                        <div className="pro-details">
                            <p>E-commerce website built using React JS and fakestoreAPI is used.</p>
                            <div className="pro-btns">
                                <a href="https://easy-com.netlify.app/"><button className='btn'>View</button></a>
                                <a href="https://github.com/gauravrathod802/E-commerce-project"><button className='btn'>Source</button></a>
                            </div>
                        </div>
                    </div>
                    {/* 3 */}
                    <div className="project-card">
                        <img src={Project3} alt="project3" />
                        <h2 className='project-title'>Tic-Tac-Toe</h2>
                        <div className="pro-details">
                            <p>A 2 Player game Tic-Tac-Toe is built using HTML, CSS and Javascript.</p>
                            <div className="pro-btns">
                                <a href="https://gauravrathod802.github.io/Tic-Tac-Toe/"><button className='btn'>View</button></a>
                                <a href="https://github.com/gauravrathod802/Tic-Tac-Toe"><button className='btn'>Source</button></a>
                            </div>
                        </div>
                    </div>

                    {/* 4 */}
                    <div className="project-card">
                        <img src={Project4} alt="project4" />
                        <h2 className='project-title'>Currency Converter</h2>
                        <div className="pro-details">
                            <p>API is used for Currency exchange.</p>
                            <div className="pro-btns">
                                <a href="https://gauravrathod802.github.io/Currency-Converter/"><button className='btn'>View</button></a>
                                <a href="https://github.com/gauravrathod802/Currency-Converter"><button className='btn'>Source</button></a>
                            </div>
                        </div>
                    </div>
{/*  */}

                </div>
            </div>
        </div>
    )
}

export default Project;
