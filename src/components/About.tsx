
import React from "react";
import styles from "./About.module.css";
import profilePic from "../assets/pixleProfilePic.png";
import GitHubIcon from "../assets/githubIcon.svg";
import InstagramIcon from "../assets/InstagramIcon.svg";
import LinkedinIcon from "../assets/linkedinIcon.svg";



const iconSize = { width: 32, height: 32 };


const aboutSection: React.FC = () => {
    return (
        <div className={styles.aboutSectionContainer}>
            <div className={styles.aboutSection}>
                <div className={styles.info}>
                    <h1>Hey, I'm Lincoln</h1>
                    <p>I recently graduated with a degree in computer science and am currently working full-time as a cybersecurity associate at UGA’s Security Operations Center. Before that, I worked as a restoration botany technician in the mountains of Northern California—an experience that inspired this website’s design. Although I’ve graduated, my learning hasn’t stopped—I’m studying for the CompTIA Network+ and AWS Cloud Practitioner certifications, and working on some fun personal software projects.</p>
                    <p>Outside of software, I spend my time gardening, playing guitar, organizing community events, and staying active through hiking, biking, and skateboarding. I believe hobbies and artistic outlets boost my creativity, happiness and productivity.</p>
                    <p>Thank you for checking out my website! Feel free to look around and explore some of my projects, music, and easter eggs!</p>
                    <div className={styles.linksWithIcons}>
                        <a href="https://github.com/LincolnLedet" target="_blank" rel="noopener noreferrer">
                        <img src= {GitHubIcon} className={styles.githubIcon}/>
                        </a>
                        <a href="https://www.instagram.com/lincolnledet/" target="_blank" rel="noopener noreferrer">
                        <img src= {InstagramIcon} className={styles.githubIcon}/>
                        </a>
                        <a href="https://www.linkedin.com/in/lincoln-ledet/" target="_blank" rel="noopener noreferrer">
                        <img src= {LinkedinIcon} className={styles.githubIcon}/>
                        </a>
                    </div>
                </div>
                <img src={profilePic} alt="Profile" className={styles.profilePic}></img>

            </div>
            <div className={styles.rocklayer1}>
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 8 100 5"
                    width="2000px"
                    height="180px"


                >
                    <path
                        className={styles.rockLayer1Path}
                        d="M0,10.8092 S1.0783,11.0661,2.1566,11.3230 S3.1579,11.2276,4.1592,11.1323 S5.2710,11.0990,6.3827,11.0657 S8.0157,10.7923,9.6488,10.5189 S10.9248,10.7293,12.2007,10.9397 S13.4645,11.4689,14.7283,11.9981 S15.6394,11.2587,16.5506,10.5193 S17.7458,10.9883,18.9410,11.4573 S20.1902,11.1644,21.4394,10.8714 S23.1916,11.0100,24.9438,11.1485 S25.6103,11.2228,26.2767,11.2971 S28.0990,11.0835,29.9213,10.8698 S30.8181,10.8854,31.7149,10.9010 S33.1343,11.3336,34.5537,11.7663 S35.5422,11.5351,36.5306,11.3040 S38.1522,11.4181,39.7738,11.5323 S40.7510,11.6074,41.7282,11.6826 S42.7825,11.3840,43.8367,11.0854 S45.4585,11.3465,47.0804,11.6077 S48.3147,11.5831,49.5491,11.5586 S50.6704,11.1033,51.7917,10.6480 S52.8529,10.9771,53.9140,11.3061 S55.2813,11.5116,56.6485,11.7172 S57.8002,11.8031,58.9520,11.8891 S60.4331,11.7247,61.9142,11.5603 S63.0428,11.3296,64.1713,11.0989 S65.3242,11.2833,66.4770,11.4678 S68.1723,11.5558,69.8676,11.6438 S70.5894,11.1232,71.3112,10.6026 S72.5677,10.5893,73.8243,10.5760 S75.2437,10.8012,76.6632,11.0264 S78.1348,11.0520,79.6064,11.0776 S80.8735,11.1220,82.1406,11.1664 S83.2246,11.1313,84.3086,11.0962 S85.8659,11.3411,87.4231,11.5859 S88.4647,11.1707,89.5062,10.7554 S90.8907,10.9977,92.2752,11.2399 S93.1703,11.0459,94.0654,10.8518 S95.6704,11.3558,97.2754,11.8599 S98.4415,11.5589,99.6076,11.2579 L100,11.9500V20H0z" />
                </svg>
            </div>
        </div>

    )
};

export default aboutSection;