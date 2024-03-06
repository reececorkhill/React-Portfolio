import React from 'react';
import projectData from '../../../data/projects.json'

const TeamTree = () => {
    return (
        <div className="col-sm-12 col-md-12 col-lg-12 col-xl-12">
            {projectData.map((data) => (
                <div className="col-sm-12 col-md-12 col-lg-12 col-xl-12">
                    <div className="card mb-3" id="work-card">
                        <a href=""><img src={data.imgsource} className="card-img-top" alt={data.imgalt}/></a>
                        <div className="card-body">
                            <h5 className="card-title">{data.h5}</h5>
                            <p className="card-text">{data.p1}</p>
                            <p className="card-text"><small className="text-muted">{data.tag}</small></p>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default TeamTree;