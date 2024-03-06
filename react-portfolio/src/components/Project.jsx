import React from 'react';
import projectData from '../../data/projects.json';

const handleClick = () => {
    const buttons = document.querySelectorAll('button')

    buttons.forEach(function (button) {
        console.log(button)
        console.log(button.id)
        if (button.id === "button-1") {
            console.log("This one matches!")
        } else {
            console.log("Not this one!")
        }
    })
}

const Button = (props) => {
    return (
    <button id={props.id} onClick={handleClick}>View Project</button>
    );
}

const Project = (props) => {
    console.log(props.slug)
    return (
    <div className="col-sm-12 col-md-12 col-lg-12 col-xl-12">
        <div className="card mb-3" id="work-card">
            <a href=""><img src="" className="card-img-top" alt={props.imgalt}/></a>
            <div className="card-body">
                <h5 className="card-title">{props.h5}</h5>
                <p className="card-text">{props.p1}</p>
                <a href={props.slug}>
                    <Button id={"button-" + props.id}/>
                </a>
                <p className="card-text"><small className="text-muted">{props.tag}</small></p>
            </div>
        </div>
    </div>
    );
};

export default Project;