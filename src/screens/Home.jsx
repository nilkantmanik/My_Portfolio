import React from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import AboutMe from "../components/AboutMe";
import Projects from "../components/Projects";
import ContactMe from "../components/ContactMe";
// import Footer from "../components/Footer";

const Home = () => {
  return (
    <>
      {/* Navbar */}
      <Navbar />
      {/* hero  */}
      <Hero />
      {/* about me  */}
      <AboutMe />
      {/* Projects */}
      <Projects />

      {/* contact me  */}
      <ContactMe />

      {/* footer  */}
      {/* <Footer /> */}
    </>
  );
};

export default Home;
