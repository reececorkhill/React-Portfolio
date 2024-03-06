import React from 'react';
import projectData from '../../data/projects.json'

const GalleryCard = () => {
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
                <a href={data.slug}>
                    <button>View Project</button>
                </a>
                <p className="card-text"><small className="text-muted">{data.tag}</small></p>
            </div>
        </div> 
    ))}
    </div>
    );
};

export default GalleryCard;