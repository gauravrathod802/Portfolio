import React, { useEffect } from 'react'
import './Skills.css';
import HTML from './../../assets/skills/html.png';
import CSS from './../../assets/skills/css.png';
import JS from './../../assets/skills/js.png';
import REACT from './../../assets/skills/react.png';
import JAVA from './../../assets/skills/java.png';
import SPRING from './../../assets/skills/spring.png';
import SQL from './../../assets/skills/sql.png';
import MYSQL from './../../assets/skills/mysql.png';
import GIT from './../../assets/skills/git.png';
import GITHUB from './../../assets/skills/github.png';
import INTELLIJ from './../../assets/skills/intellij.png';
import VSCODE from './../../assets/skills/vs-code.png';
import AOS from 'aos'
import 'aos/dist/aos.css';

const Skills = () => {
    useEffect(()=>{
        AOS.init({duration: 10000});
    }, []);

    return (
        <section id='skills' data-aos="fade-up">
            <h1>Skills</h1>
            <div className="skills-container">
                <div className="skills-card">
                    <div className="skills">
                        <h2>Frontend</h2>
                        <hr />
                        <button><img src={HTML} alt="html" /> HTML</button>
                        <button><img src={CSS} alt="css" /> CSS</button>
                        <button><img src={JS} alt="js" /> Javascript</button>
                        <button><img src={REACT} alt="react" /> React</button>
                    </div>
                </div>

                {/* card 2 */}
                <div className="skills-card">
                    <div className="skills">
                        <h2>Backend</h2>
                        <hr />
                        <button><img src={JAVA} alt="java" /> JAVA</button>
                        <button><img src={SPRING} alt="spring" /> Spring</button>
                    </div>
                </div>

                {/* card 3 */}
                <div className="skills-card">
                    <div className="skills">
                        <h2>Database</h2>
                        <hr />
                        <button><img src={SQL} alt="sql" /> SQL</button>
                        <button><img src={MYSQL} alt="mysql" /> MYSQL</button>
                    </div>
                </div>

                {/* card 4 */}
                <div className="skills-card">
                    <div className="skills">
                        <h2>Others</h2>
                        <hr />
                        <button><img src={GIT} alt="git" /> GIT</button>
                        <button><img src={GITHUB} alt="github" /> Github</button>
                        <button><img src={INTELLIJ} alt="intellij" /> IntelliJ</button>
                        <button><img src={VSCODE} alt="vs-code" /> VS Code</button>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Skills;