import React from 'react';

const Header = () => {
    return(
    <div>
        <div className="header">
            <img src="./assets/images/logo.svg" alt="X" class="logo"/>
        </div>
        <button class="mobile-nav-toggle" aria-controls="primary-navigation" aria-expanded="false"><span class="sr-only">Menu</span></button>
        <nav>
            <ul data-visible="false" id="primary-navigation" class="primary-navigation flex">
                <li class="active">
                    <a class=" uppercase text-white letter-spacing-2" href="index.html">
                        <span aria-hidden="true">[</span> About <span aria-hidden="true">]</span>
                    </a>
                </li>
                <li>
                    <a class=" uppercase text-white letter-spacing-2" href="./pages/resume.html" target="_blank" rel="noreferrer">
                        <span aria-hidden="true">[</span> Portfolio <span aria-hidden="true">]</span>
                    </a>
                </li>
                <li>
                    <a class=" uppercase text-white letter-spacing-2" href="https://github.com/SLachelier" target="_blank" rel="noreferrer">
                        <span aria-hidden="true">[</span> Contact <span aria-hidden="true">]</span>
                    </a>
                </li>
                <li>
                    <a class=" uppercase text-white letter-spacing-2" href="www.linkedin.com/in/slachelier/" target="_blank" rel="noreferrer">
                        <span aria-hidden="true">[</span> Resume <span aria-hidden="true">]</span>
                    </a>
                </li>
                <li>
                    <a class=" uppercase text-white letter-spacing-2" href="./pages/contact.html" target="_blank" rel="noreferrer">
                        <span aria-hidden="true">[</span> LinkedIn <span aria-hidden="true">]</span>
                    </a>
                </li>
            </ul>
        </nav>
    </div>

    );
};

export default Header;