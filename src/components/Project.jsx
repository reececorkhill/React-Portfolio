import React from 'react';
import { Link } from 'react-router-dom';

const Project = (props) => {
    return (
    <>
    <div className="project-cards-div col-sm-12 col-md-6 col-lg-6 col-xl-4">
        <div className="card mb-3">
            <img src={props.imgsource} className="card-img-top" alt={props.imgalt}/>
            <div className="card-body">
                <h2>{props.h2}</h2>
                <p className="card-text card-text-left">
                {props.p1}
                </p>
                <div className="project-card-buttons">
                    <Link to={`/Projects/${props.id}`}>
                        <button className="btn btn-outline-light btn-md">Read More...</button>
                    </Link>
                    <a className="btn btn-outline-light btn-md" href={props.repo} role="button">GitHub</a>
                    <a className="btn btn-outline-light btn-md" href={props.demo} role="button">Demo</a>
                </div>
                <p className="card-text"><small>{props.tag}</small></p>
            </div>
        </div>
    </div>
    </>
    );
};

export default Project;
