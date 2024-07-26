import AboutMe from '../../Components/AboutMe/AboutMe';
import Skills from '../../Components/Skills/Skills';
import './HomePage.scss';


const HomePage = () => {
  return (
    <div className="homepage">
      <h1 className="homepage__intro">A Junior Software Developer based in the UK.</h1>
    <AboutMe/>
    <Skills/>
    </div>
  )
}

export default HomePage