import React from 'react';
import { useParams } from 'react-router-dom';
import projectData from '../../data/projects.json'

const ViewProject = () => {

    const {id} = useParams();

    const project = projectData.filter(project => project.id == id)

    return (
        <div className="col-sm-12 col-md-12 col-lg-12 col-xl-12">
            {project.map((project) => (
                <div className="card mb-3" key={project.id}>
                    <img src={project.imgsource} className="card-img-top" alt={project.imgalt}/>
                    <div className="card-body">
                        <h1>{project.h1}</h1>
                        <p className="card-text card-text-left">{project.description}</p>
                        {/* <button className="btn btn-outline-light btn-md">{project.tag}</button> */}
                    </div>
                </div>
            ))}
        </div>
    );
}

export default ViewProject;