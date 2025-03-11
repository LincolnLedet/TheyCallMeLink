import { useState, useRef } from "react";
import styles from "./App.module.css"; 
import Landing from "./components/Mountains.tsx";
import NavBar from "./components/NavBar.tsx";
import About from "./components/About.tsx";
import Projects from "./components/Projects.tsx";
import Resume from "./components/Resume.tsx";

function App() {
  const aboutRef = useRef<HTMLDivElement>(null);
  const projectsRef = useRef<HTMLDivElement>(null);
  const resumeRef = useRef<HTMLDivElement>(null);

  const scrollToSection = (ref: React.RefObject<HTMLDivElement>) => {
    ref.current?.scrollIntoView({ behavior: "smooth" });
  }

  return (
    <>
    {/* if about Ref is underlined in red in vscooe don't worrie about it.  */}
    <div className={styles.homepage}>
        <div>
          <NavBar aboutRef={aboutRef} projectsRef={projectsRef} resumeRef={resumeRef} />
        </div>

        <div>
          <Landing /> {/*Mountains.tsx*/}
        </div>

        <div ref={aboutRef} className={styles.section}>
            <About/>
          </div>
          <div ref={projectsRef} className={styles.section}>
            <Projects/>
          </div>
          <div ref={resumeRef} className={styles.section}>
            <Resume/>
        </div>
      </div>
      

    </>
  );
}

export default App
