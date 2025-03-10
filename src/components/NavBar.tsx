import React, { RefObject, useEffect, useState } from "react";
import styles from "./NavBar.module.css";

const config = {
  anims: {
    live: {
      interval: 60000,
      getProgress: () => {
        const now = new Date();
        const time =
          now.getHours() * 3600 + now.getMinutes() * 60 + now.getSeconds();
        return time / 86400;
      },
    },
  },
  states: [
    {
      at: 0,
      name: "night",
      colours: {
        c0: "#bed8f8",
        c1: "#7da5d5",
        c2: "#3078bf",
        c3: "#1860a5",
        c4: "#155798",
        c5: "#0c4e8f",
        c6: "#073866",
        c7: "#042b50",
        c8: "#02213f",
        c9: "#021a32",
        c10: "#00101f",
      },
    },
    {
      at: 6,
      name: "sunrise",
      colours: {
        c0: "#f5e5e5",
        c1: "#fed4d5",
        c2: "#dcbed9",
        c3: "#c8aed9",
        c4: "#b19fcc",
        c5: "#a496c4",
        c6: "#7d88bd",
        c7: "#6371a9",
        c8: "#555986",
        c9: "#404364",
        c10: "#2e2c3f",
      },
    },
    {
      at: 12,
      name: "day",
      colours: {
        c0: "#feebe2",
        c1: "#ffe2a6",
        c2: "#ffb06d",
        c3: "#ff9d60",
        c4: "#ff8f4c",
        c5: "#fc813a",
        c6: "#f04f30",
        c7: "#d2353a",
        c8: "#8b1036",
        c9: "#620a38",
        c10: "#2f1121",
      },
    },
    {
      at: 18,
      name: "sunset",
      colours: {
        c0: "#ffc348",
        c1: "#ffad39",
        c2: "#f29a14",
        c3: "#ed8d14",
        c4: "#c86f11",
        c5: "#e17b17",
        c6: "#c0531a",
        c7: "#b04717",
        c8: "#70211a",
        c9: "#3c0b0e",
        c10: "#1e0000",
      },
    },
  ],
};

// Ensure states loop smoothly (add night at 24:00)
config.states.push({ ...config.states[0], name: "end", at: 24 });

const getCurrentColors = () => {
  const now = new Date();
  const hour = now.getHours();

  // Ensure last state's `at` doesn't cause errors
  let currentState = config.states.find(
    (state, i) => hour >= state.at && (config.states[i + 1]?.at ?? 25) > hour
  );

  return currentState ? currentState.colours : config.states[0].colours;
};

// Apply CSS variables dynamically
const setCSSVariables = (colors: Record<string, string>) => {
  const root = document.documentElement;
  Object.entries(colors).forEach(([key, value]) => {
    root.style.setProperty(`--${key}`, value);
  });
};

const Navbar = ({
  aboutRef,
  projectsRef,
  resumeRef,
}: {
  aboutRef: RefObject<HTMLElement>;
  projectsRef: RefObject<HTMLElement>;
  resumeRef: RefObject<HTMLElement>;
}) => {
  const [colors, setColors] = useState(getCurrentColors());

  useEffect(() => {
    setCSSVariables(colors);
  }, [colors]);

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
