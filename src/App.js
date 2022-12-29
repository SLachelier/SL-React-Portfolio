import './App.scss';
import React from 'react';
import { Component } from 'react';
import About from './pages/About';
import Projects from './pages/Projects';
import Resume from './pages/Resume';
import Contact from './pages/Contact';
import { Route, Routes, Link } from "react-router-dom";

class App extends Component {
  state = {clicked: false};
  handleClick = () => {
    this.setState({clicked: !this.state.clicked})
  }
  render() {
  return (
    <div>
        <div className="background">
          <link href='https://fonts.googleapis.com/css?family=Lato:300,400,700' rel='stylesheet' type='text/css'/>
          <section className="wrapper">
              <div id="stars"></div>
              <div id="stars2"></div>   
              <div id="stars3"></div>
          </section>
        </div>
        <div className="section">
        <div className="header">
          <header>
          <h1>Shauna Lachelier</h1>
              <nav>
                  <ul id="nav-links" className={this.state.clicked ? ".nav-links active" : ".nav-links"}>
                      <li><Link to="/">About</Link></li>
                      <li><Link to="/projects">Projects</Link></li>
                      <li><Link to="/resume">Resume</Link></li>
                      <li><a href="https://www.linkedin.com/in/slachelier/" target="_blank" rel="noreferrer">LinkedIn</a></li>
                  </ul>
              </nav>
              <div id="mobile" onClick={this.handleClick}>
                <i id="bar" className={this.state.clicked ? 'fas fa-times' : 'fas fa-bars'}> </i>
              </div>
              <Link className="cta button" to="/contact"><button className='neu button'>Contact</button></Link>
          </header>
      </div>

        <section className="glass-main">
              <Routes>
                <Route path="/" element={<About/>} />
                <Route path="/projects" element={<Projects/>} />
                <Route path="/resume" element={<Resume/>} />
                <Route path="/contact" element={<Contact/>} />
              </Routes>
        </section>
      </div>
      <div className="footer">
        <p>Thank you for viewing!</p>
        <h3>Created by Shauna Lachelier</h3>
        <aside>
            <h4>Contact Information:</h4>
            <p>Phone: (860) 992-3440</p>
            <p>E-mail: SLachelier@gmail.com</p>
        </aside>
      </div>
    </div>
)
}
}

export default App;
