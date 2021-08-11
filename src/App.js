import React from "react";
import "./styles.css";
import Home from "./components/Home";
import About from "./components/About";

import Project from "./components/Project";
import Footer from "./components/Footer";
function App() {
  return (
    <div className="App">
      <div className="container">
        <Home />
        <About />
        <Project />
        <Footer />
      </div>
    </div>
  );
}

export default App;
