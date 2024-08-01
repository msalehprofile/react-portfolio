import { Link } from "react-router-dom";
import Footer from "../../Components/Footer/Footer";
import email from "./../../Images/email.png";
import github from "./../../Images/github-logo.png";
import linkedIn from "./../../Images/linked-in-round.png";
import "./ContactMe.scss";

const ContactMe = () => {
  return (
    <div className="contactpage">
      <h2 className="contactpage__heading">Get in touch</h2>
      <p className="contactpage__underline"></p>
      <div className="contactpage__group">
        <img src={email} alt="" className="contactpage__icon" />
        <p className="contactpage__subheading">Email:</p>
      </div>
      <Link to="mailto:mollyhannia@hotmail.co.uk" target="_blank">
        <p className="contactpage__link">mollyhannia@hotmail.co.uk</p>
      </Link>
      <div className="contactpage__group">
        <img src={linkedIn} alt="" className="contactpage__icon" />
        <p className="contactpage__subheading">Linkedin:</p>
      </div>
      <Link
        to="https://www.linkedin.com/in/molly-saleh-b2b41b188/"
        target="_blank"
      >
        <p className="contactpage__link">
          https://www.linkedin.com/in/molly-saleh-b2b41b188/
        </p>
      </Link>
      <div className="contactpage__group">
        <img src={github} alt="" className="contactpage__icon" />
        <p className="contactpage__subheading">Github</p>
      </div>
      <Link to="https://github.com/msalehprofile" target="_blank">
        <p className="contactpage__link">https://github.com/msalehprofile</p>
      </Link>
      <p className="contactpage__link">
        Please email me if you would like to be sent my CV.
      </p>
      <Footer />
    </div>
  );
};

export default ContactMe;
