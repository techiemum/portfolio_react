import React from 'react';
import Navbar from './Navbar/Navbar';
import myResume from './myresume.pdf'

function Header() {

    return (
        <div className="main" id="home-section">
              <Navbar/>
            <div className="name" >
                <p className="heading">Looing for An Intern!</p>

                <h1>I'm <span> Asmaa </span> S </h1>

                <p className="details">I am an Aspiring Full Stack Developer in Australia , Current student of Coder Academy.I love working
                in team and enjoy learning new technologies</p>

                <div className="header-btns">
                    <a href="mailto:techiemum@workmail.com" className="btn-1">Hire me</a>
                    <a href={myResume} className="btn-2" rel="noreferrer" target="_blank">Download CV</a>
                    {/* <a className="download" href={myResume} rel="noreferrer" target="_blank" */}
                </div>
            </div>
            <div class="arrow"></div>
        </div>    
           
           )
}

export default Header