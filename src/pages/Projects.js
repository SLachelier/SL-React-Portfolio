function Projects() {
  const projectsStyles = `
  html {
    width: 100%;
    // height: 100vh;
  }
  `;
  return (
    <div className="projects-page">
    <style>{projectsStyles}</style>
      <h1 className="projTitle">Projects</h1>
      <div className="cards">
        <div className="card">
          <img src="../../images/NowYouKnow.png" id="card-img-1" alt=""/>
          <a href="https://arcane-cliffs-23763.herokuapp.com/"  target="_blank" rel="noReferrer" class="proj-name">NowYouKnow</a>
          <p>The description for the project goes here</p>
          <div className="btns">
            <button type="button"><a href="https://github.com/SLachelier/nowYouKnow" target="_blank" rel="noReferrer">Repository</a></button>
            <button type="button" >Technologies</button>
          </div>
        </div>
        <div className="card">
          <img src="../../images/Lightbulb.png" id="card-img-2" alt=""/>
          <a href="https://lightbulb-collaboration.herokuapp.com/" target="_blank" rel="noReferrer" class="proj-name">Lightbulb</a>
          <p>The description for the project goes here</p>
          <div className="btns">
          <button type="button"><a href="https://github.com/SLachelier/Lightbulb" target="_blank" rel="noReferrer">Repository</a></button>
          <button type="button">Information</button>
          </div>
        </div>
        <div className="card">
          <img src="../../images/MegaBytes.png" id="card-img-3" alt=""/>
          <a href="https://slachelier.github.io/MegaBytes/" target="_blank" rel="noReferrer" class="proj-name">MegaBytes</a>
          <p>The description for the project goes here</p>
          <div className="btns">
          <button type="button"><a href="https://github.com/SLachelier/MegaBytes" target="_blank" rel="noReferrer">Repository</a></button>
          <button type="button">Information</button>
          </div>
        </div>
        <div className="card">
          <img src="../../images/e-commerce.png" id="card-img-4" alt=""/>
          <a href="https://github.com/SLachelier/backend-e-commerce-slachelier" target="_blank" rel="noReferrer" class="proj-name">E-Commerce Backend</a>
          <p>The description for the project goes here</p>
          <div className="btns">
          <button type="button"><a href="https://github.com/SLachelier/backend-e-commerce-slachelier" target="_blank" rel="noReferrer">Repository</a></button>
          <button type="button">Information</button>
          </div>
        </div>
        <div className="card">
          <img src="../../images/JATE.png" id="card-img-5" alt=""/>
          <a href="https://sl-pwa-text-editor.herokuapp.com/" target="_blank" rel="noReferrer" class="proj-name">PWA Text-Editor</a>
          <p>The description for the project goes here</p>
          <div className="btns">
          <button type="button"><a href="https://github.com/SLachelier/Text-Editor--SLachelier" target="_blank" rel="noReferrer">Repository</a></button>
          <button type="button" >Information</button>
          </div>
        </div>
        <div className="card">
          <img src="../../images/READMEGen.png" id="card-img-6" alt=""/>
          <a href="https://github.com/SLachelier/README-Generator" target="_blank" rel="noReferrer" class="proj-name">README Generator</a>
          <p>The description for the project goes here</p>
          <div className="btns">
          <button type="button"><a href="https://github.com/SLachelier/README-Generator" target="_blank" rel="noReferrer">Repository</a></button>
          <button type="button">Information</button>
          </div>
        </div>
      </div>
    </div>

  );
}

export default Projects;