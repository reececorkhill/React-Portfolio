import React from 'react';

const Resume = () => {
    return (
    <div className="row work-row pt-5 pb-5">
        <div className="col-sm-12 col-md-12 col-lg-12 col-xl-12">
            <div className="card mb-3" id="work-card">
                <a href=""><img src="" className="card-img-top" alt="Project Image"/></a>
                <div className="card-body">
                    <h5 className="card-title">NJ Coaching Website</h5>
                    <p className="card-text">A client website built using WordPress and Elementor.
                    Fully responsive design that includes Image Galleries, a Contact Form,
                    Google Analytics and a Google Maps Integration.
                    </p>
                    <p className="card-text"><small className="text-muted">WordPress</small></p>
                </div>
            </div>
        </div>
    </div>
    );
};

export default Resume;