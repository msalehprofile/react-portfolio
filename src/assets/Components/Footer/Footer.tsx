import "./Footer.scss";
import cvImage from './../../Images/cv-image.png';
import github from './../../Images/github-logo.png';
import linkedIn from './../../Images/linked-in-round.png';
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer__links">
        <Link to="mailto:mollyhannia@hotmail.co.uk" target="_blank"> <img src={cvImage} alt="" className="footer__links--images"/></Link>
        <Link to="https://github.com/msalehprofile" target="_blank"> <img src={github} alt="" className="footer__links--images"/></Link>
        <Link to="https://www.linkedin.com/in/molly-saleh-b2b41b188/" target="_blank"> <img src={linkedIn} alt="" className="footer__links--images"/></Link>
      </div>
      <p className="footer__lemail">mollyhannia@hotmail.co.uk</p>
    </div>
  );
};

export default Footer;
