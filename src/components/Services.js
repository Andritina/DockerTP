import React from "react";

const Services = () => {
    return (
        <div className="container" data-aos="fade-up">
            <div className="section-title">
                <h2>Services</h2>
                <p>L'essence de mon travaille réside dans la collaboration étroite avec mes clients . Votre vision,
                    associé à ma compétence technique.</p>
            </div>

            <div className="row">

                <div className="col-lg-4 col-md-6 d-flex align-items-stretch" data-aos="zoom-in" data-aos-delay="100">
                    <div className="icon-box iconbox-blue bg-dark">
                        <h4><a href="">Développe un application web</a></h4>
                    </div>
                </div>

                <div className="col-lg-4 col-md-6 d-flex align-items-stretch mt-4 mt-md-0" data-aos="zoom-in"
                    data-aos-delay="200">
                    <div className="icon-box iconbox-orange bg-dark">
                        <h4><a href="">Développe un application mobile</a></h4>
                    </div>
                </div>

                <div className="col-lg-4 col-md-6 d-flex align-items-stretch mt-4 mt-lg-0" data-aos="zoom-in"
                    data-aos-delay="300">
                    <div className="icon-box iconbox-pink bg-dark">
                        <h4><a href="">Développe un logiciel desktop</a></h4>
                    </div>
                </div>

            </div>

        </div>
    )
}

export default Services