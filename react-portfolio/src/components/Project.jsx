import React from 'react';

const Project = (props) => {
    return (
    <div className="col-sm-12 col-md-12 col-lg-12 col-xl-12">
        <div className="card mb-3" id="work-card">
            <a href=""><img src="" className="card-img-top" alt={props.imgalt}/></a>
            <div className="card-body">
                <h5 className="card-title">{props.h5}</h5>
                <p className="card-text">{props.p1}</p>
                <button id={props.id}>View Project</button>
                <p className="card-text"><small className="text-muted">{props.tag}</small></p>
            </div>
        </div>
    </div>
    );
};

export default Project;