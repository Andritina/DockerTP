import React from "react";

const Hero = () => {
    return (
        <section id="hero" class="d-flex flex-column align-items-center justify-content-center visible">
            <div className="row m-0">
                <div className="col-md-6">
                    <h2>Bonjour, je m'appelle</h2>
                    <h1>RAKOTOARIMANANA Andritina Tonny</h1>
                    <p>Et je suis <strong>développeur web | mobile</strong></p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nihil expedita laborum at? Accusamus error
                    voluptate.</p>
                </div>
                <div class="social-links">
                    <a href="#" class="twitter"><i class="bi bi-twitter"></i></a>
                    <a href="#" class="facebook"><i class="bi bi-facebook"></i></a>
                    <a href="#" class="instagram"><i class="bi bi-instagram"></i></a>
                    <a href="#" class="linkedin"><i class="bi bi-linkedin"></i></a>
                    <a href="assets/cv/cvtonny.pdf" class="linkedin" alt="Télécharger mon CV" attribut="download"><i
                        className="bi bi-upload"></i></a>
                </div>
                <div className="col-md-6"></div>
            </div>

            <a href="#about" className="btn-get-started scrollto"><i className="bi bi-chevron-double-down"></i></a>
        </section>
    )
}

export default Hero