// NavBar.tsx
import React from "react";
import styles from "./NavBar.module.css";

type NavBarProps = {
  aboutRef: React.RefObject<HTMLDivElement | null>;
  projectsRef: React.RefObject<HTMLDivElement | null>;
  resumeRef: React.RefObject<HTMLDivElement | null>;
};

export default function NavBar({
  aboutRef,
  projectsRef,
  resumeRef,
}: NavBarProps) {
  // <T extends HTMLElement> lets us accept any HTMLElement ref,
  // and we include |null so TS knows current might be null.
  const scrollToSection = <T extends HTMLElement>(
    ref: React.RefObject<T | null>
  ) => {
    ref.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className={styles.nav}>
      <button onClick={() => scrollToSection(aboutRef)}>ABOUT</button>
      <button onClick={() => scrollToSection(projectsRef)}>PROJECTS</button>
      <button onClick={() => scrollToSection(resumeRef)}>RESUME</button>
    </div>
  );
}
