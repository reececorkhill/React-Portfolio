import React from 'react';
import projectData from '../../data/projects.json';

const Project = () => {
    return (
    <div className="col-sm-12 col-md-6 col-lg-3 col-xl-3">
        {projectData.map((data) => (
            <div className="card mb-3" key={data.id}>
                <img src={data.imgsource} className="card-img-top" alt={data.imgalt}/>
                <div className="card-body">
                    <h1>{data.h5}</h1>
                    <p className="card-text card-text-left">
                    {data.p1}
                    </p>
                    <a href={data.repo}>
                        <button>View Demo</button>
                    </a>
                    <a href={data.repo}>
                        <button>View Repo</button>
                    </a>
                    <p className="card-text"><small className="text-muted">{data.tag}</small></p>
                </div>
            </div> 
        ))}
    </div>
    );
};

export default Project;