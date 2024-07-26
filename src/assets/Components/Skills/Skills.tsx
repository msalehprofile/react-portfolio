import './Skills.scss';
import bemLogo from './../../Images/skills-logos/bem-logo.png';
import cssLogo from './../../Images/skills-logos/css-logo.png';
import gitLogo from './../../Images/skills-logos/Git-Icon-Black.png';
import HTMLLogo from './../../Images/skills-logos/HTML5_Black_Logo.png';
import javaLogo from './../../Images/skills-logos/java-logo.png';
import javascriptLogo from './../../Images/skills-logos/javascript-logo.png';
import reactLogo from './../../Images/skills-logos/react-logo.png';
import sassLogo from './../../Images/skills-logos/sass.png';
import springbootLogo from './../../Images/skills-logos/spring-boot-logo.png';



const Skills = () => {
  return (
    <div>
        <section className="skills">
        <h1 className="skills__heading">Technical Skills</h1>
        <p className="skills__description">These are some of applications that I have been developing my skills on:</p>
        <div className="skills__visual-grid">
            <div className="visual-grid__group">
                <img src={bemLogo} alt="" className="visual-grid__group--img"/>
                <p className="visual-grid__group--label">BEM</p>
            </div>

            <div className="visual-grid__group">
                <img src={HTMLLogo} alt="" className="visual-grid__group--img"/>
                <p className="visual-grid__group--label">HTML</p>
            </div>

            <div className="visual-grid__group">
                <img src={gitLogo} alt="" className="visual-grid__group--img"/>
                <p className="visual-grid__group--label">Git</p>
            </div>

            <div className="visual-grid__group">
                <img src={cssLogo} alt="" className="visual-grid__group--img"/>
                <p className="visual-grid__group--label">CSS</p>
            </div>

            <div className="visual-grid__group">
                <img src={sassLogo} alt="" className="visual-grid__group--img"/>
                <p className="visual-grid__group--label">SCSS</p>
            </div>

            <div className="visual-grid__group">
                <img src={javaLogo} alt="" className="visual-grid__group--img"/>
                <p className="visual-grid__group--label">Java</p>
            </div>

            <div className="visual-grid__group">
                <img src={javascriptLogo} alt="" className="visual-grid__group--img"/>
                <p className="visual-grid__group--label">JavaScript</p>
            </div>


            <div className="visual-grid__group">
                <img src={reactLogo} alt="" className="visual-grid__group--img"/>
                <p className="skills__visual-grid--group--label">React</p>
            </div>

            <div className="visual-grid__group">
                <img src={springbootLogo} alt="" className="visual-grid__group--img"/>
                <p className="visual-grid__group--label">Spring Boot</p>
            </div>
        </div>
    </section>
    </div>
  )
}

export default Skills