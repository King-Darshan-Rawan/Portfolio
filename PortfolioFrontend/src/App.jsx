import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection"; 
import IntroductionSection from "./components/Introduction";
import "./App.css";

export default function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        {/* {<p>Hai</p>} */}
        <Routes>
          <Route path="/" element={<HeroSection />} />
          
        </Routes>
        <IntroductionSection />
        {/* Add more sections as needed */}
      </div>
    </Router>
  );
}
