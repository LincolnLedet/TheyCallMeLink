import React from "react";
import styles from "./Resume.module.css";
import { Worker, Viewer } from '@react-pdf-viewer/core';
import '@react-pdf-viewer/core/lib/styles/index.css';
import '@react-pdf-viewer/default-layout/lib/styles/index.css';
import resume from "../assets/PDFS/Ledet_Resume.PDF";



const Resume: React.FC = () => {
    return (
        <>
        <div className={styles.resumeSection}>


            <div className={styles.Title}>
                <h1>Experience</h1>

            </div>

            <div className={styles.resumepdf}>
                <Worker workerUrl="https://unpkg.com/pdfjs-dist@3.11.174/build/pdf.worker.min.js">
                    <Viewer fileUrl={resume} />
                </Worker>
            </div>
            <div className={styles.downloadButton}>
                <a href={resume} download="Ledet_Resume.PDF" className={styles.downloadLink}>
                    Download Resume
                </a>
            </div>
           
        </div>


        </>

    )
};

export default Resume;