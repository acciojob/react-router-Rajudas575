import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Navigation from "./Navigation";
import './../styles/App.css';

const App = () => {
  return (
    <div>
        {/* Do not remove the main div */}
    </div>
  <Router>
    
        <Navigation />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
    
    </Router>
  )
}

export default App
