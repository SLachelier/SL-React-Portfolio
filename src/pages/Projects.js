import { useState } from 'react';

function Projects() {
  const projectsStyles = `
  html {
    width: 100%;
    // height: 100vh;
  }
  `;

  const [showInfo, setShowInfo] = useState(Array(5).fill(false));

  const handleButtonClick = (index) => {
    const newShowInfo = [...showInfo];
    newShowInfo[index] = !newShowInfo[index];
    setShowInfo(newShowInfo);
  };

  return (
    <div className="projects-page">
    <style>{projectsStyles}</style>
      <h1 className="projTitle">Projects</h1>
      <div className="cards">
        <div className="card">
          <img src="../../images/NowYouKnow.png" id="card-img-1" alt=""/>
          <a href="https://arcane-cliffs-23763.herokuapp.com/"  target="_blank" rel="noReferrer" class="proj-name">NowYouKnow</a>
          <p>A game where players try to guess another player's answers.</p>
          <div className="btns">
            <button type="button"><a href="https://github.com/SLachelier/nowYouKnow" target="_blank" rel="noReferrer">Repository</a></button>
            <button type="button" onClick={() => handleButtonClick(0)}>Technologies</button>
            {showInfo[0] && <div className="info-bubble">
              <i class="fa-brands fa-react"></i>
              <i class="fa-brands fa-html5"></i>
              <i class="fa-brands fa-square-js"></i>
              <i class="fa-brands fa-sass"></i>
              <i class="fa-brands fa-bootstrap"></i>
              <i class="fa-brands fa-node-js"></i>
              <i class="fa-brands fa-npm"></i>
              <i class="fa-brands fa-github"></i>
              <i class="fa-brands fa-mdb"></i>
              </div>}
          </div>
        </div>
        <div className="card">
          <img src="../../images/Lightbulb.png" id="card-img-2" alt=""/>
          <a href="https://lightbulb-collaboration.herokuapp.com/" target="_blank" rel="noReferrer" class="proj-name">Lightbulb</a>
          <p>A social media platform designed to encourage collaboration.</p>
          <div className="btns">
          <button type="button"><a href="https://github.com/SLachelier/Lightbulb" target="_blank" rel="noReferrer">Repository</a></button>
          <button type="button" onClick={() => handleButtonClick(1)}>Technologies</button>
            {showInfo[1] && <div className="info-bubble">
              <i class="fa-brands fa-css3-alt"></i>
              <i class="fa-brands fa-html5"></i>
              <i class="fa-brands fa-square-js"></i>
              <i class="fa-brands fa-bootstrap"></i>
              <i class="fa-brands fa-node-js"></i>
              <i class="fa-brands fa-npm"></i>
              <i class="fa-brands fa-github"></i>
              <i class="fa-brands fa-mdb"></i>
              </div>}
          </div>
        </div>
        <div className="card">
          <img src="../../images/MegaBytes.png" id="card-img-3" alt=""/>
          <a href="https://slachelier.github.io/MegaBytes/" target="_blank" rel="noReferrer" class="proj-name">MegaBytes</a>
          <p>A restaurant finder for highly rated restaurants in cities around the world.</p>
          <div className="btns">
          <button type="button"><a href="https://github.com/SLachelier/MegaBytes" target="_blank" rel="noReferrer">Repository</a></button>
          <button type="button" onClick={() => handleButtonClick(2)}>Technologies</button>
            {showInfo[2] && <div className="info-bubble">
              <i class="fa-brands fa-css3-alt"></i>
              <i class="fa-brands fa-html5"></i>
              <i class="fa-brands fa-square-js"></i>
              <i class="fa-brands fa-bootstrap"></i>
              <i class="fa-brands fa-node-js"></i>
              <i class="fa-brands fa-npm"></i>
              <i class="fa-brands fa-github"></i>
              </div>}          
          </div>
        </div>
        <div className="card">
          <img src="../../images/e-commerce.png" id="card-img-4" alt=""/>
          <a href="https://github.com/SLachelier/backend-e-commerce-slachelier" target="_blank" rel="noReferrer" class="proj-name">E-Commerce Backend</a>
          <p>A a backend application that provides routes, models, and seed data for an e-commerce website.</p>
          <div className="btns">
          <button type="button"><a href="https://github.com/SLachelier/backend-e-commerce-slachelier" target="_blank" rel="noReferrer">Repository</a></button>
          <button type="button" onClick={() => handleButtonClick(3)}>Technologies</button>
            {showInfo[3] && <div className="info-bubble">
              <i class="fa-brands fa-square-js"></i>
              <i class="fa-brands fa-node-js"></i>
              <i class="fa-brands fa-npm"></i>
              <i class="fa-brands fa-github"></i>
              <i class="fa-brands fa-mdb"></i>
              </div>}
          </div>
        </div>
        <div className="card">
          <img src="../../images/JATE.png" id="card-img-5" alt=""/>
          <a href="https://sl-pwa-text-editor.herokuapp.com/" target="_blank" rel="noReferrer" class="proj-name">PWA Text-Editor</a>
          <p>A web app text editor.</p>
          <div className="btns">
          <button type="button"><a href="https://github.com/SLachelier/Text-Editor--SLachelier" target="_blank" rel="noReferrer">Repository</a></button>
          <button type="button" onClick={() => handleButtonClick(4)}>Technologies</button>
            {showInfo[4] && <div className="info-bubble">
              <i class="fa-brands fa-css3-alt"></i>
              <i class="fa-brands fa-html5"></i>
              <i class="fa-brands fa-square-js"></i>
              <i class="fa-brands fa-bootstrap"></i>
              <i class="fa-brands fa-node-js"></i>
              <i class="fa-brands fa-npm"></i>
              <i class="fa-brands fa-github"></i>
              </div>}
          </div>
        </div>
        <div className="card">
          <img src="../../images/buildTX.jpg" id="card-img-6" alt=""/>
          <a href="https://earnest-smakager-954b20.netlify.app/" target="_blank" rel="noReferrer" class="proj-name">BuildTX Database</a>
          <p>Web app using the an API to quickly search and filter construction projects.</p>
          <div className="btns">
          <button type="button"><a href="https://github.com/SLachelier/BuildTX" target="_blank" rel="noReferrer">Repository</a></button>
          <button type="button" onClick={() => handleButtonClick(5)}>Technologies</button>
            {showInfo[5] && <div className="info-bubble">
              <i class="fa-brands fa-react"></i>
              <i class="fa-brands fa-html5"></i>
              <i class="fa-brands fa-square-js"></i>
              <i class="fa-brands fa-sass"></i>
              <i class="fa-brands fa-bootstrap"></i>
              <i class="fa-brands fa-node-js"></i>
              <i class="fa-brands fa-npm"></i>
              <i class="fa-brands fa-github"></i>
              <i class="fa-brands fa-mdb"></i>
              </div>}
          </div>
        </div>
      </div>
    </div>

  );
}

export default Projects;