import React from "react";
import Header from "./Component/Header.jsx";
import Education from "./Component/Education.jsx";
import Experience from "./Component/Expereince.jsx";
import Skills from "./Component/Skills.jsx";
import Projects from "./Component/Projects.jsx";
import Contact from "./Component/Contact.jsx";
import "./index.css";

function App() {
  return (
    <div className="cv-container">
      <Header />

      <section className="objective">
        <h2>Career Objective</h2>
        <p>
          To obtain a challenging position as a Software Engineer where I can
          utilize my technical and analytical skills to contribute to
          organizational success while continuously enhancing my knowledge.
        </p>
      </section>

      <Education />
      <Experience />
      <Projects />
      <Skills />
      <Contact />
    </div>
  );
}

export default App;
