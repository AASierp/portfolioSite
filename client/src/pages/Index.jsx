import React from "react";
import About from "../components/About";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Projects from "../components/Projects";
import Hero from "../components/Hero";
import Connect from "../components/Connect";

function Index() {
  return (
    <div className ="main-container">
      <Header />
      <Hero />
      <Projects />
      <About />
      <Connect />
      <Footer />
    </div>
  );
}

export default Index;
