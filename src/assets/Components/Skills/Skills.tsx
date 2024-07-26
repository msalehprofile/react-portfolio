import './Skills.scss';


const Skills = () => {
  return (
    <div>
        <section className="skills">
        <h1 className="skills__heading">Technical Skills</h1>
        <p className="skills__description">These are some of applications that I have been developing my skills on:</p>
        <div className="skills__visual-grid">
            <div className="visual-grid__group">
                <img src="./images/skills-logos/bem-logo.png" alt="" className="visual-grid__group--img"/>
                <p className="visual-grid__group--label">BEM</p>
            </div>

            <div className="visual-grid__group">
                <img src="./images/skills-logos/HTML5_Black_Logo.png" alt="" className="visual-grid__group--img"/>
                <p className="visual-grid__group--label">HTML</p>
            </div>

            <div className="visual-grid__group">
                <img src="./images/skills-logos/Git-Icon-Black.png" alt="" className="visual-grid__group--img"/>
                <p className="visual-grid__group--label">Git</p>
            </div>

            <div className="visual-grid__group">
                <img src="./images/skills-logos/css-logo.png" alt="" className="visual-grid__group--img"/>
                <p className="visual-grid__group--label">CSS</p>
            </div>

            <div className="visual-grid__group">
                <img src="./images/skills-logos/sass.png" alt="" className="visual-grid__group--img"/>
                <p className="visual-grid__group--label">SCSS</p>
            </div>

            <div className="visual-grid__group">
                <img src="./images/skills-logos/java-logo.png" alt="" className="visual-grid__group--img"/>
                <p className="visual-grid__group--label">Java</p>
            </div>

            <div className="visual-grid__group">
                <img src="./images/skills-logos/javascript-logo.png" alt="" className="visual-grid__group--img"/>
                <p className="visual-grid__group--label">JavaScript</p>
            </div>


            <div className="visual-grid__group">
                <img src="./images/skills-logos/react-logo.png" alt="" className="visual-grid__group--img"/>
                <p className="skills__visual-grid--group--label">React</p>
            </div>

            <div className="visual-grid__group">
                <img src="./images/skills-logos/spring-boot-logo.png" alt="" className="visual-grid__group--img"/>
                <p className="visual-grid__group--label">Spring Boot</p>
            </div>
        </div>
    </section>
    </div>
  )
}

export default Skills