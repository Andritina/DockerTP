import React from "react";

const Resume = () => {
    return (
        <section id="resume" class="resume">
            <div className="container" data-aos="fade-up">
                <div className="section-title">
                    <h2>Résume</h2>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sapiente obcaecati alias, ad quam sint ab
                        magnam quia nobis eos nisi. Ut eum laborum labore totam aliquid, minima iure animi illum.</p>
                </div>

                <div className="row">
                    <div className="col-lg-6">
                        <h3 className="resume-title">Sumary</h3>
                        <div className="resume-item pb-0">
                            <h4>Andritina Tonny</h4>
                            <p>
                                <ul>
                                    <li>Lot 11 20 A 499 à Miaramasoandro,Antsirabe</li>
                                    <li>+261 34 67 377 34</li>
                                    <li>tonny.andritina@gmail.com</li>
                                </ul>
                            </p>
                        </div>

                        <h3 className="resume-title">Education</h3>
                        <div className="resume-item">
                            <h4>Licence professionnel en informatique</h4>
                            <h5>2022 - 2023</h5>
                            <p><em>Institut d'Enseignement Supérieur d'Antsirabe Vakinankaratra</em></p>
                            <p>J'ai débuté à l'IES-AV en 2019 jusqu'à aujourd'hui dans le parcours Génie Logiciel.</p>
                        </div>
                        <div className="resume-item">
                            <h4>Baccalaureat</h4>
                            <h5>2019 - 2020</h5>
                            <p><em>Lycée Privée KAMAFA</em></p>
                            <p>Baccalaureat Série D</p>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <h3 className="resume-title">Experience professionnel</h3>
                        <div className="resume-item">
                            <h4>Développeur Node.js</h4>
                            <h5>Avril 2023 - Présent</h5>
                            <p><em>Création d'un logiciel de vote électronique </em></p>
                            <p>
                                <ul>
                                    <li>Réalisations d'un application web de gestion de voix électorale.</li>
                                    <li>Réalisations d'un application mobile pour voter.</li>
                                </ul>
                            </p>
                        </div>
                        <div className="resume-item">
                            <h4>Développeur Java</h4>
                            <h5>5 Septembre 2022 - Mars 2023</h5>
                            <p><em>I-VOTIKA Antsirabe</em></p>
                            <p>
                                <ul>
                                    <li>Le travail consiste a dévelloper un application web pour suivre les resultat des
                                        election sur les region
                                        Vakinankaratra et pour eviter les falcification des resultats.</li>
                                </ul>
                            </p>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    )
}

export default Resume