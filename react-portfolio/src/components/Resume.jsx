import React from 'react';
import resumeData from '../../data/resume.json';

const Resume = () => {
    return (
        <div className="row resume-row pt-5 pb-5">
        {resumeData.map((data) => (
           <div className="jumbotron" id="resume-page-component" key={"Resume"}>
                <h1 className="display-4 pt-4 pb-2">{data.h1}</h1>
                <p className="lead">
                    {data.p1}
                </p>
                <p className="lead">
                    {data.p2}
                </p>
                <div className="about-buttons">
                    <a className="btn btn-outline-light btn-lg" href="/ReeceCorkhillResume.pdf" download="ReeceCorkhillResume.pdf" role="button">Download</a>
                    <a className="btn btn-outline-light btn-lg" href="/Contact" role="button">Contact Me</a>
                </div>
            </div>
        ))}
    </div>
    );
};

export default Resume;