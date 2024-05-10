import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
// import GenericRoutes from "./Routes";
// import * as Component from "./components/common";
import Header from "./components/common/Header"
import Popup from "./components/common/PopUp";
import GenericRoutes from "./Routes";
import Footer from "./components/common/Footer";
function App() {
  const [showPopup, setShowPopup] = useState(false);
  //Smooth Scroll
  const location = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  
  const handleClosePopup = () => {
    setShowPopup(false);
  };

  //PopUp Box
  useEffect(() => {
    const popupTimeout = setTimeout(() => {
      setShowPopup(true);
    }, 300000);

    return () => {
      clearTimeout(popupTimeout);
    };
  }, [showPopup]);

  return (
    <div>
        <Header/>
      {/* main code */}
      {/* <Header/>
      {showPopup && <Popup onClose={handleClosePopup} />}
      <GenericRoutes />
      <Footer /> */}
      {/* main code */}
    </div>
  );
}

export default App;
