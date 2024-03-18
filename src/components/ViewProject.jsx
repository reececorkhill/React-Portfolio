import React from 'react';
import { useParams } from 'react-router-dom';
import projectData from '../../data/projects.json'

const ViewProject = () => {

    const {id} = useParams();

    const project = projectData.filter(project => project.id == id)

    return (
    <div className="row project-row pt-5 pb-5">
        <div className="single-project-div col-sm-12 col-md-12 col-lg-12 col-xl-12">
            {project.map((project) => (
                <div className="card single-project-card mb-3" key={project.id}>
                    <img src={project.imgsource} className="card-img-top" alt={project.imgalt}/>
                    <div className="card-body single-card-body">
                        <h1>{project.h1}</h1>
                        <p className="card-text card-text-left">{project.description}</p>
                        <div className='single-card-buttons'>   
                            <a className="btn btn-outline-light btn-md" href={project.repo} role="button">GitHub</a>
                            <a className="btn btn-outline-light btn-md" href={project.demo} role="button">Demo</a>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    </div>
    );
}

export default ViewProject;