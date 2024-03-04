import React from 'react';

const About = (props) => {
    return (
    <div className="col-sm-6 col-md-6 col-lg-6 col-xl-6">
        <div className="card mb-3" id="about-card">
        <img src={props.imgsource} className="card-img-top" alt={props.imgalt}/>
            <div className="card-body">
                <h1>{props.h1}</h1>
                <p className="card-text card-text-left">
                {props.p1}
                </p>
                <p className="card-text card-text-left">
                {props.p2}
                </p>
                <p className="card-text card-text-left">
                {props.p3}
                </p>
            </div>
        </div>
    </div>
    );
};

export default About;