import React, { useState } from "react";
import "./styles/app.scss";
import Home from "./components/Home";
import About from "./components/About";
import Project from "./components/Project";
import Footer from "./components/Footer";

function App() {
  const [isRecentWorkScrolled, setIsRecentWorkScrolled] = useState(false);
  const [isHamburgerActive, setIsHamburgerActive] = useState(false);

  return (
    <div className="App">
      <div className="container">
        <Home
          isHamburgerActive={isHamburgerActive}
          setIsHamburgerActive={setIsHamburgerActive}
        />
        <About />
        <Project
          isRecentWorkScrolled={isRecentWorkScrolled}
          setIsRecentWorkScrolled={setIsRecentWorkScrolled}
        />
        <Footer
          isHamburgerActive={isHamburgerActive}
          setIsHamburgerActive={setIsHamburgerActive}
        />
      </div>
    </div>
  );
}

export default App;
