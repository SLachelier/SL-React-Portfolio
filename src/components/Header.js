import React from 'react';

const Header = () => {
    return(
    <div>
        <header>
            <h1>Shauna Lachelier</h1>
            <nav>
                <ul class="nav_links">
                    <li><a href="#">Services</a></li>
                    <li><a href="#">Projects</a></li>
                    <li><a href="#">About</a></li>
                </ul>
            </nav>
            <a className="cta button" href="#"><button className='neu'>Contact</button></a>
        </header>
    </div>

    );
};

export default Header;