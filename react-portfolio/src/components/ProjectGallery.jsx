import React from 'react';
import Project from './Project';
import projectData from '../../data/projects.json'

const ProjectGallery = () => {
    return (
    <div className="row work-row pt-5 pb-5">
        {projectData.map((data) => (
            <Project
                key={data.id}
                id={data.id}
                imgsource={data.imgsource}
                imgalt={data.imgalt}
                h5={data.h5}
                p1={data.p1}
                tag={data.tag}
                slug={data.slug}
            />
        ))}
    </div>
    );
};

export default ProjectGallery;