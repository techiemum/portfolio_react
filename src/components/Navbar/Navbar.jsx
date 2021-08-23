import React from 'react';
//created function for navigation
function Navbar() {

    return (

        <nav>
            <a href="#" className="logo">
                Full Stack Developer
            </a>
            <input className="menu-btn" type="checkbox" id="menu-btn"/>
            <label className="menu-icon" for="menu-btn">
                <span className="nav-icon"></span>
            </label>

            <ul className="menu">
                <li><a href="#home-section">Home</a></li>
                <li><a href="#about-section">About</a></li>
                <li><a href="#service-section">Services</a></li>
                <li><a href="https://github.com/techiemum?tab=repositories">Portfolio</a></li>
                <li><a href="#contact-section">Contact</a></li>
            </ul>
            <a href="#" className="Hey">Hey!</a>
        </nav>

    )
}

export default Navbar