import React from "react";

const Header = () => {
    return (
        <header id="header" className="d-flex align-items-center">
            <div className="container d-flex align-items-center justify-content-between">
                <div className="logo">
                    <h1><a href="index.html"> <strong>Andritina Tonny</strong> </a></h1>
                </div>

                <nav id="navbar" className="navbar">
                    <ul>
                        <li><a className="nav-link scrollto active" href="#hero">Accueil</a></li>
                        <li><a className="nav-link scrollto" href="#about">A propos</a></li>
                        <li><a className="nav-link scrollto" href="#resume">Resume</a></li>
                        <li><a className="nav-link scrollto" href="#services">Services</a></li>
                    </ul>
                    <i className="bi bi-list mobile-nav-toggle"></i>
                </nav>
                
            </div>
        </header>
    )
}

export default Header