import React from "react";
import { BrowserRouter as Router } from "react-router-dom"; // Only Router is needed
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import IntroductionSection from "./components/Introduction";
import HireMeSection from "./components/HireMeSection";
import ExperienceTimeline from "./components/ExperienceTimeline";
import EducationTimeline from "./components/EducationSection";
import ContactForm from "./components/ContactForm";
import Footer from "./components/Footer";
import "./App.css";

export default function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />

        {/* Wrap each section in a div with an id */}
        <section id="HOME">
          <HeroSection />
        </section>

        <section id="ABOUT">
          <IntroductionSection />
        </section>

        <section id="EXPERIENCE">
          <ExperienceTimeline />
        </section>

        <section id="EDUCATION">
          <EducationTimeline />
        </section>

        <section id="CONTACT">
          <ContactForm />
        </section>

        <Footer />
      </div>
    </Router>
  );
}
