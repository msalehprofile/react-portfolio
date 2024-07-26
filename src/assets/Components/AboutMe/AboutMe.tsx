import "./AboutMe.scss";
import profilePic from './../../Images/profile-pic.jpeg';

const AboutMe = () => {
  return (
    <div>
      <div className="aboutme">
        <h1 className="aboutme__heading">About me</h1>
        <img
          src={profilePic}
          alt="image of myself"
          className="aboutme__image"
        />
        <p className="aboutme__paragraph">
          I am a trainee software engineer currently enrolled on a 12 week
          accelerated course at _nology. As part of this I will be gaining
          knowledge and experience using HTML, CSS as well as various languages
          (Java, JavaScript, Spring etc.), working both on my own and as part of
          a team. <br />
          <br /> I have previous experience working in a merchandising
          environment where I have developed strong problem solving skills and
          the ability to be very focused on the small details of projects. I
          will be able to transfer these skills to this new avenue and along
          with being a driven individual hope to ensure a long and successful
          career.
          <br />
          <br />
          Head over to the project section to have a look at what I can create!
        </p>
      </div>
    </div>
  );
};

export default AboutMe;
