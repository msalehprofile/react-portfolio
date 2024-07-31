import "./AboutMe.scss";
import profilePic from "./../../Images/profile-pic.jpeg";

const AboutMe = () => {
  return (
    <div>
      <div className="aboutme">
        <h1 className="aboutme__heading">About me</h1>
        <p className="aboutme__underline"></p>
        <img
          src={profilePic}
          alt="image of myself"
          className="aboutme__image"
        />
        <p className="aboutme__paragraph">
          I am a full stack junior software engineer who has recently completed
          a 12 week accelerated course with _nology where I gained knowledge and
          experience using various languages looking at both front and backend
          (please see below for more detail).
          <br />
          <br />
          As well as learning the fundamentals of each language I also completed
          various projects where I showcased the skills I learnt. 
          <br />
          <br />
          My previous experience working in a merchandising environment
          enabled me to developed strong problem solving skills and the ability
          to be very focused on the small details of projects. I will be able to
          transfer these skills to this new avenue and along with being a driven
          individual hoping to ensure a long and successful career.
          <br />
          <br />
          Head over to the project section to have a look at what I can create!
        </p>
      </div>
    </div>
  );
};

export default AboutMe;
