import '../style/Cv.css';
import html from '../assets/html.svg';
import css from '../assets/css.svg';
import js from '../assets/js.svg';
import git from '../assets/git.svg';
import github2 from '../assets/github2.svg';
import figma from '../assets/figma.svg';
import profilbild1 from '../assets/profilbild1.png';

const Cv = () => {
    return (
    <>
        <section className="cv-section" id="CV">
            <div className="cv-container">
            <div className="cv-content">
                <div className="profile-picture">
                <img src={profilbild1} alt="Profile Picture" />
                </div>

                <div className="education">
                <h3>Education</h3>
                <p>
                    <span className="title">Frontend Developer</span><br />
                    <span className="institute">NBI / Handelsakademin</span>, <span className="time">2023 - present</span>
                </p>
                </div>

                <div className="programming-courses">
                <h3>Kurser</h3>
                <ul className="course-list">
                    <li><span className="completed">&#10004;</span> HTML/CSS</li>
                    <li><span className="completed">&#10004;</span> JavaScript</li>
                    <li><span className="completed">&#10004;</span> Graphic Tools</li>
                    <li><span className="completed">&#10004;</span> UX och Usability</li>
                    <li><span className="completed">&#10004;</span> Agile Methods</li>
                    <li><span className="completed">&#10004;</span> Advanced JavaScript</li>
                    <li><span className="completed">&#10004;</span> Testing</li>
                    <li>Fullstack Development</li>
                    <li>LIA 1 and LIA 2</li>
                    <li>Final Project</li>
                </ul>
                </div>
            </div>
            <div className="skills">
                <h3>Kompetenser</h3>
                <div className="skill-images">
                <div className="image">
                    <img src={html} alt="HTML Icon" style={{ maxWidth: '50px', maxHeight: '50px' }} />
                </div>
                <div className="image">
                    <img src={css} alt="CSS Icon" style={{ maxWidth: '50px', maxHeight: '50px' }} />
                </div>
                <div className="image">
                    <img src={js} alt="JavaScript Icon" style={{ maxWidth: '50px', maxHeight: '50px' }} />
                </div>
                <div className="image">
                    <img src={git} alt="Git Icon" style={{ maxWidth: '50px', maxHeight: '50px' }} />
                </div>
                <div className="image">
                    <img src={github2} alt="GitHub Icon" style={{ maxWidth: '50px', maxHeight: '50px' }} />
                </div>
                <div className="image">
                    <img src={figma} alt="Figma Icon" style={{ maxWidth: '50px', maxHeight: '50px' }} />
                </div>
                </div>
            </div>

            <div className="cv-content">
                <div className="education">
                <h3>Utbildning</h3>
                <p>
                    <span className="titel">B2B Sales (Account Manager)</span><br />
                    <span className="institut">Stockholm School of Business</span>, <span className="time">2019 - 2021</span>
                </p>
                </div>

                <div className="courses">
                <h3>Some of the courses I took:</h3>
                <ul>
                    <li>Business English</li>
                    <li>Business Communication</li>
                    <li>Customer Relationship Management</li>
                    <li>Selling in Digital Channels</li>
                    <li>Complex and Consultative Selling</li>
                    <li>Business Economics and Entrepreneurship</li>
                    <li>Public Procurement</li>  
                </ul>
                </div>

                <div className="experience">
                <h3>Work Experience</h3>
                <p>
                    <span className="title">Team Leader</span><br />
                    <span className="company">Hornbach Gothenburg</span>, <span className="time">2023</span><br />
                    Managing the flow of goods to and from the goods reception.
                          Being responsible for the mailbox and structure, including communication of information to employees regarding new guidelines, working methods, and systems, as well as training new employees.
                          Maintaining general preventive measures and rules of conduct.
                </p>
                <p>
                    <span className="title">Goods Receiver</span><br />
                    <span className="company">Hornbach Göteborg</span>, <span className="time">2021 - 2023</span>
                </p>
                </div>
            </div>
            </div>
        </section>
    </>
    );
    }
    export default Cv;