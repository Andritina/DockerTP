import React from "react";

const About = () => {
    return (
        <section id="about" className="about">
            <div className="container" data-aos="fade-up">
                <div class="section-title">
                    <h2>A propos</h2>
                    <p>Je cherche un emploi de développeur web ou mobile. Mes objectif est de développer mes compétences sur
                        le développement informatique dans le but d'évoluer sur des postes clefs pour la suite de ma
                        carrière.</p>
                </div>
                <div className="row">
                    <div className="col-lg-8 pt-4 pt-lg-0 content">
                        <h1>Développeur web & mobile</h1>
                        <p>Découvrez les facettes unique de ma personnalité et de mes valeurs à travers cette exploration de
                            mes caractéristiques.</p>
                        
                        <div className="row">
                            <div className="col-lg-6">
                                <ul>
                                    <li><i className="bi bi-chevron-right"></i> <strong>Anniversaire:</strong> <span>27 Mai
                                            2002</span></li>
                                    <li><i className="bi bi-chevron-right"></i> <strong>Téléphone:</strong> <span>+261 34 67 377
                                            34</span></li>
                                    <li><i className="bi bi-chevron-right"></i> <strong>Ville:</strong> <span>Antsirabe
                                            Madagascar</span></li>
                                </ul>
                            </div>
                            <div className="col-lg-6">
                                <ul>
                                    <li><i className="bi bi-chevron-right"></i> <strong>Age:</strong> 
                                        <span>22 ans</span></li>
                                    <li><i className="bi bi-chevron-right"></i> <strong>Email:</strong>
                                        <span>tonny.andritina@gmail.com</span></li>
                                    <li><i className="bi bi-chevron-right"></i> <strong>Freelance:</strong>
                                        <span>Disponible</span></li>
                                </ul>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    )
}

export default About