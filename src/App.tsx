import { useState, useRef } from "react";
import styles from "./App.module.css"; 
import Landing from "./components/Mountains.tsx";
import NavBar from "./components/NavBar.tsx";


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
      <div>
        <NavBar aboutRef={aboutRef} projectsRef={projectsRef} resumeRef={resumeRef} />
      </div>

      <div>
        <Landing /> {/*Mountains.tsx*/}
      </div>

      <div ref={aboutRef} className={styles.section}>
          <h2>About Section</h2>
        </div>
        <div ref={projectsRef} className={styles.section}>
          <h2>Projects Section</h2>
        </div>
        <div ref={resumeRef} className={styles.section}>
          <h2>Resume Section</h2>
      </div>
      

    </>
  );
}

export default App
