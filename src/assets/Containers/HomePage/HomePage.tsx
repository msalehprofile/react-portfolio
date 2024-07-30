import AboutMe from "../../Components/AboutMe/AboutMe";
import Footer from "../../Components/Footer/Footer";
import Skills from "../../Components/Skills/Skills";
import Typewriter from "typewriter-effect";

import "./HomePage.scss";

const HomePage = () => {

  return (
    <div className="homepage">
      <Typewriter
        onInit={(typewriter) => {
          typewriter
            .typeString("A Junior Software Developer based in the UK.")
            .pauseFor(2000)
            .start();
        }}
      />
      <AboutMe />
      <p className="homepage__wave"></p>
      <Skills />
      <Footer />
    </div>
  );
};

export default HomePage;
