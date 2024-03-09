import React from 'react';
import projectData from '../../data/projects.json';

const Project = () => {
    return (
        <div className="row project-row pt-5 pb-5">
            {projectData.map((data) => (
                <div className="project-cards-div col-sm-12 col-md-6 col-lg-6 col-xl-4">
                    <div className="card mb-3" key={data.id}>
                        <img src={data.imgsource} className="card-img-top" alt={data.imgalt}/>
                        <div className="card-body">
                            <h2>{data.h2}</h2>
                            <p className="card-text card-text-left">
                            {data.p1}
                            </p>
                            <div className="project-card-buttons">
                                <a className="btn btn-outline-light btn-md" href={data.repo} role="button">View Repo</a>
                                <a className="btn btn-outline-light btn-md" href={data.demo} role="button">View Demo</a>
                            </div>
                            <p className="card-text"><small className="text-muted">{data.tag}</small></p>
                        </div>
                    </div> 
                </div>
            ))}
        </div>
    );
};

export default Project;