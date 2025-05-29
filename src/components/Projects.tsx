import React from "react";
import styles from "./Projects.module.css";
import sensationalistPic from "../assets/Sensationalist.png";
import stockPic from "../assets/stockImg.jpg";
import guitarPic from "../assets/GuitarPedal.png"

const Projects: React.FC = () => {
    return (
        <div className={styles.ProjectSection}>
            <h1>My Projects</h1>
            <div className={styles.gridContainer}>
                <a href="https://the-sensationalist.xyz" target="_blank" rel="noopener noreferrer" className={styles.gridItem}>
                    <img src={sensationalistPic} alt="Image 1" />
                    <div className={styles.overlayText}>
                        <p> The Sensationalist</p>
                        A full‑stack publication website.

                    </div>
                </a>

                <a href="https://github.com/LincolnLedet/StockSentimentAnalysis" target="_blank" rel="noopener noreferrer" className={styles.gridItem}>
                    <img src={stockPic} alt="Image 2" />
                    <div className={styles.overlayText}>
                        <p>Stock Sentiment Analysis</p>
                        A tool that predicts stock price changes based on recent news headlines.

                    </div>
                </a>

                <a href="https://devpost.com/software/python-guitar-pedal" target="_blank" rel="noopener noreferrer" className={styles.gridItem}>
                    <img src={guitarPic} alt="Image 3" />
                    <div className={styles.overlayText}>
                        <p>Python Audio Processor</p>
                        A Python app for guitar effects that visualizes and manipulates audio signals.

                    </div>
                </a>



                
            </div>
            <div className={styles.rockLayer2}>
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 8 101 4"
                    width="2000px"
                    height="180px"
                >
                    <path
                        className={styles.rockLayerPath}
                        d="M0,10.8092 S1.0783,11.0661,2.1566,11.3230 S3.1579,11.2276,4.1592,11.1323 S5.2710,11.0990,6.3827,11.0657 S8.0157,10.7923,9.6488,10.5189 S10.9248,10.7293,12.2007,10.9397 S13.4645,11.4689,14.7283,11.9981 S15.6394,11.2587,16.5506,10.5193 S17.7458,10.9883,18.9410,11.4573 S20.1902,11.1644,21.4394,10.8714 S23.1916,11.0100,24.9438,11.1485 S25.6103,11.2228,26.2767,11.2971 S28.0990,11.0835,29.9213,10.8698 S30.8181,10.8854,31.7149,10.9010 S33.1343,11.3336,34.5537,11.7663 S35.5422,11.5351,36.5306,11.3040 S38.1522,11.4181,39.7738,11.5323 S40.7510,11.6074,41.7282,11.6826 S42.7825,11.3840,43.8367,11.0854 S45.4585,11.3465,47.0804,11.6077 S48.3147,11.5831,49.5491,11.5586 S50.6704,11.1033,51.7917,10.6480 S52.8529,10.9771,53.9140,11.3061 S55.2813,11.5116,56.6485,11.7172 S57.8002,11.8031,58.9520,11.8891 S60.4331,11.7247,61.9142,11.5603 S63.0428,11.3296,64.1713,11.0989 S65.3242,11.2833,66.4770,11.4678 S68.1723,11.5558,69.8676,11.6438 S70.5894,11.1232,71.3112,10.6026 S72.5677,10.5893,73.8243,10.5760 S75.2437,10.8012,76.6632,11.0264 S78.1348,11.0520,79.6064,11.0776 S80.8735,11.1220,82.1406,11.1664 S83.2246,11.1313,84.3086,11.0962 S85.8659,11.3411,87.4231,11.5859 S88.4647,11.1707,89.5062,10.7554 S90.8907,10.9977,92.2752,11.2399 S93.1703,11.0459,94.0654,10.8518 S95.6704,11.3558,97.2754,11.8599 S98.4415,11.5589,99.6076,11.2579 L100,11.9500V20H0z"
                    />
                </svg>
            </div>
        </div>

    )
};

export default Projects;