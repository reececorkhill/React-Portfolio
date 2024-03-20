import React from 'react';
import Project from './Project';
import projectData from '../../data/projects.json';

const ProjectGallery = () => {
    return (
    <>
        <div className="row project-row pt-5 pb-5 m-4">
            {projectData.map((data) => (
                <Project
                key={data.id} 
                id={data.id}
                imgsource={data.imgsource}
                imgalt={data.imgalt}
                h1={data.h1}
                h2={data.h2}
                p1={data.p1}
                description={data.description}
                tag={data.tag}
                repo={data.repo}
                demo={data.demo}
                />
            ))}
        </div>
    </>
    );
};

export default ProjectGallery;