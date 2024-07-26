import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.scss";
import HomePage from "./assets/Containers/HomePage/HomePage";
import NavBar from "./assets/Components/NavBar/NavBar";
import { useState } from "react";
import MobileNavMenu from "./assets/Components/MobileNavMenu/MobileNavMenu";
import Footer from "./assets/Components/Footer/Footer";

function App() {
  const pageName = "Molly Saleh";
  const [showMobileNav, setShowMobileNav] = useState<boolean>(false)

  const handleShowMobileNav = ( ) => {
    setShowMobileNav(true)
  }

  const handleHideMobileNav = () => {
    setShowMobileNav(false)
  }
  
  return (
    <>
      <BrowserRouter>
        <NavBar pageName={pageName} handleShowMobileNav={handleShowMobileNav} showMobileNav={showMobileNav} handleHideMobileNav={handleHideMobileNav}/>
        {showMobileNav && <MobileNavMenu handleHideMobileNav={handleHideMobileNav}/>}
        
        <Routes>
          <Route path="/react-portfolio/" element={<HomePage />} />
        </Routes>
        <Footer/>
      </BrowserRouter>
    </>
  );
}

export default App;
