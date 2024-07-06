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
                <h3>Utbildning</h3>
                <p>
                    <span className="title">Frontend-utvecklare</span><br />
                    <span className="institute">NBI / Handelsakademin</span>, <span className="time">2023 - pågående</span>
                </p>
                </div>

                <div className="programming-courses">
                <h3>Kurser</h3>
                <ul className="course-list">
                    <li><span className="completed">&#10004;</span> HTML/CSS</li>
                    <li><span className="completed">&#10004;</span> JavaScript</li>
                    <li><span className="completed">&#10004;</span> Grafiska verktyg</li>
                    <li><span className="completed">&#10004;</span> UX och Usability</li>
                    <li><span className="completed">&#10004;</span> Agila metoder</li>
                    <li><span className="completed">&#10004;</span> JavaScript-fördjupning</li>
                    <li><span className="completed">&#10004;</span> Testning</li>
                    <li>Fullstackutveckling</li>
                    <li>LIA 1 och LIA 2</li>
                    <li>Examensarbete</li>
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
                    <span className="titel">Säljare B2B (Account Manager)</span><br />
                    <span className="institut">Stockholm School of Business</span>, <span className="time">2019 - 2021</span>
                </p>
                </div>

                <div className="courses">
                <h3>Några av de kurser jag läste:</h3>
                <ul>
                    <li>Affärsengelska</li>
                    <li>Affärskommunikation</li>
                    <li>Customer Relationship Management</li>
                    <li>Försäljning i digitala kanaler</li>
                    <li>Komplex och konsultativ försäljning</li>
                    <li>Affärsekonomi och entreprenörskap</li>
                    <li>Offentlig upphandling</li>  
                </ul>
                </div>

                <div className="experience">
                <h3>Arbetslivserfarenhet</h3>
                <p>
                    <span className="title">Gruppledare</span><br />
                    <span className="company">Hornbach Göteborg</span>, <span className="time">2023</span><br />
                    Styrning av varuflöde från och till godsmottagningen.<br />
                    Ansvar för mailbox och struktur. Förmedla information till medarbetare om nya riktlinjer, arbetsätt och system. Inarbetning av nya medarbetare.<br />
                    Upprätthållande av allmänna preventionsåtgärder och förhållningsregler.
                </p>
                <p>
                    <span className="title">Godsmottagare</span><br />
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