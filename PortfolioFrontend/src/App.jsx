import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import "./App.css";

export default function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        {<p>Hai</p>}
        <Routes>
          
        </Routes>
      </div>
    </Router>
  );
}
