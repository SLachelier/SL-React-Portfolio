import React from 'react';
import SLResume from '../assets/Shauna_Lachelier_Resume.pdf';
import { Document, Page, pdfjs } from 'react-pdf';
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

function Resume() {
  const resumeStyles = `
  html {
    width: 100%;
    // height: 100vh;
  }
  `;

  return (
    <div>
      <div className="resume">
      <style>{resumeStyles}</style>
      <h2>Resume</h2>
      </div>
      <Document file={SLResume} className="pdf">
        <Page pageNumber={1} />
      </Document>
    </div>
  );
}

export default Resume;