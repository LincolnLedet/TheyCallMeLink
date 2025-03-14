import React from "react";
import styles from "./About.module.css";
import profilePic from "../assets/pixleProfilePic.png";



const aboutSection: React.FC = () => {
    return ( 
        <div className = {styles.aboutSection}>
            <div className = {styles.info}>
                <h1>Hello, I'm Lincoln Ledet</h1>
                <p>I'm a computer science student based in Athens, Ga. Welcome to my little corner of the internet!</p>
                <p>This website serves as an all-encompassing portfolio, making my code, projects, and art accessible to everyone. It’s hosted on a personal server and is 100% homegrown and organic.</p>
            </div>
            <img src = {profilePic} alt="Profile" className = {styles.profilePic}></img>

        </div>

    )
};

export default aboutSection;