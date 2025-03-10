import React from "react";
import styles from "./About.module.css";
import profilePic from "../assets/pixleProfilePic.png"


const aboutSection: React.FC = () => {
    return ( 
        <div className = {styles.aboutSection}>
            <div className = {styles.info}>
                <h1>Hello, I'm Lincoln Ledet</h1>
                <p>Hello Welcome to my little corrnor of the internet.</p>
                <p>This website serves as a all enompassing portfoilia to make my code, projects and art accessible to everyone. This website is hosted on a personal server and is 100% home grown and organinc</p>
            </div>
            <img src = {profilePic} alt="Profile" className = {styles.profilePic}></img>

        </div>

    )
};

export default aboutSection;