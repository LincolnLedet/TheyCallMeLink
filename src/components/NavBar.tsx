import React, { RefObject, useEffect, useState } from "react";
import styles from "./NavBar.module.css";

const Navbar = ({
  aboutRef,
  projectsRef,
  resumeRef,
}: {
  aboutRef: RefObject<HTMLElement>;
  projectsRef: RefObject<HTMLElement>;
  resumeRef: RefObject<HTMLElement>;
}) => {


  const scrollToSection = (ref: RefObject<HTMLElement>) => {
    ref.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className={styles.nav}>
      <button onClick={() => scrollToSection(aboutRef)}>ABOUT</button>
      <button onClick={() => scrollToSection(projectsRef)}>PROJECTS</button>
      <button onClick={() => scrollToSection(resumeRef)}>RESUME</button>
    </div>
  );
};

export default Navbar;
