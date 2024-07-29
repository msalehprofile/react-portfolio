import { Link } from "react-router-dom";
import "./NavBar.scss";

type NavBarProps = {
  pageName: string;
  handleShowMobileNav: () => void;
  showMobileNav: boolean;
  handleHideMobileNav: () => void;
};

const NavBar = ({ pageName, handleShowMobileNav, showMobileNav, handleHideMobileNav}: NavBarProps) => {
  return (
    <div className="navbar">
      <h2 className="navbar__name">{pageName}</h2>
      <Link to="/react-portfolio/" className="navbar__link">
        About me
      </Link>
      <Link to="/react-portfolio/projects" className="navbar__link">
        Projects
      </Link>
      <Link to="/react-portfolio/stayintouch" className="navbar__link">
        Stay in Touch
      </Link>

      {!showMobileNav && <div onClick={handleShowMobileNav} className="navbar__toggle">
        <div className="navbar__toggle--bar1"></div>
        <div className="navbar__toggle--bar2"></div>
        <div className="navbar__toggle--bar3"></div>
      </div>}

      {showMobileNav && <div onClick={handleHideMobileNav} className="navbar__close">
        <div className="navbar__close--bar1"></div>
        <div className="navbar__close--bar2"></div>
      </div>}
    </div>
  );
};

export default NavBar;
