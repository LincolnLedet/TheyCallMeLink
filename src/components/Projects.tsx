import React from "react";
import styles from "./Projects.module.css";
import profilePic from "../assets/pixleProfilePic.png"
import sensationalistPic from "../assets/Sensationalist.png";

const Projects: React.FC = () => {
    return (
        
        <div className={styles.ProjectSection}>
            <h1>My Projects</h1>
            <div className={styles.gridContainer}>
                <a href = "https://the-sensationalist.xyz" target = "_blank"  rel="noopener noreferrer" className={styles.gridItem}>
                    <img src={sensationalistPic} alt="Image 1" />
                    <div className={styles.overlayText}>
                        <p> The Sensationalist</p>
                        A Full Stack Publication Website

                    </div>
                </a>
                <div className={styles.gridItem}>
                <img src={sensationalistPic} alt="Image 1" />
                    <div className={styles.overlayText}>
                        <p>LetsPlantNative!</p>
                        An AI powered website to connect landscapers with local native nurcerys (coming soon)

                    </div>
                </div>
                <div className={styles.gridItem}>
                    <img src={profilePic} alt="Image 3" />
                    <div className={styles.overlayText}>
                        <p>Sentiment analisis Stock corrilator </p>
                        A real time stock prodictuor that uses machine learning and apis predict short term stock movments
                    </div>
                </div>
            </div>
        </div>

    )
};

export default Projects;