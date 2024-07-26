import { Link } from "react-router-dom";
import "./MobileNavMenu.scss";

type MobileNavMenuProps = {
    handleHideMobileNav: () => void;
}

const MobileNavMenu = ({handleHideMobileNav}: MobileNavMenuProps) => {


  return (
    <div className="mobilenavbar">
      <Link onClick={handleHideMobileNav} to="/react-portfolio/" className="mobilenavbar__link">
        About me
      </Link>
      <Link onClick={handleHideMobileNav} to="/react-portfolio/projects" className="mobilenavbar__link">
        Projects
      </Link>
      <Link onClick={handleHideMobileNav} to="/react-portfolio/stayintouch" className="mobilenavbar__link">
        Stay in Touch
      </Link>
    </div>
  );
};

export default MobileNavMenu;
