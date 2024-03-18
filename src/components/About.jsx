import React from 'react';
import aboutData from '../../data/about.json'

const About = () => {
    return (
        <div className="row about-row pt-5 pb-5">
        {aboutData.map((data) => (
           <div className="jumbotron" id="about-page-component" key={"About"}>
                <h1 className="display-4 pt-4 pb-2">{data.h1}</h1>
                <h2 className="display-7 pt-4 pb-2">{data.h2}</h2>
                <p className="lead">
                    {data.p1}
                </p>
                <p className="lead">
                    {data.p2}
                </p>
                <div className="about-buttons">
                    <a className="btn btn-outline-light btn-lg" href="/Projects" role="button">View Projects</a>
                    <a className="btn btn-outline-light btn-lg" href="/Resume" role="button">View Resume</a>
                </div>
            </div>
        ))}
    </div>
    );
};

export default About;