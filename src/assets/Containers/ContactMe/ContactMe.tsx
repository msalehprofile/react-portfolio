import { Link } from 'react-router-dom';
import Footer from '../../Components/Footer/Footer';
import'./ContactMe.scss';

const ContactMe = () => {
  return (
    <div className="contactpage">
        <h2 className="contactpage__heading">Get in touch</h2>
        <p className="contactpage__underline"></p>
        <p className="contactpage__subheading">Email:</p>
        <Link to="mailto:mollyhannia@hotmail.co.uk" target="_blank"><p className="contactpage__link">mollyhannia@hotmail.co.uk</p></Link>
        <p className="contactpage__subheading" >Linkedin:</p>
        <Link to="https://www.linkedin.com/in/molly-saleh-b2b41b188/" target="_blank"><p className="contactpage__link">https://www.linkedin.com/in/molly-saleh-b2b41b188/</p></Link>
        <p className="contactpage__subheading">Github</p>
        <Link to="https://github.com/msalehprofile" target="_blank"><p className="contactpage__link">https://github.com/msalehprofile</p></Link>
        <p className="contactpage__link">Please email me if you would like to be sent my CV.</p>
        <Footer/>
    </div>
  )
}

export default ContactMe