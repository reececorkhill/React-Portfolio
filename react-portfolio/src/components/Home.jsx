import React from 'react';

const Home = (props) => {
    return (
    <div className="row jumbotron-row">
        <div className="jumbotron">
            <img src={props.imgsource} className="rounded" alt={props.imgalt} id="jumbotron-image"/>
            <h1 className="display-4 pt-4 pb-2">{props.h1}</h1>
            <h2 className="display-7 pt-4 pb-2">{props.h2}</h2>
            <p className="lead">
                {props.p}
            </p>
            <a className="btn btn-primary btn-lg" href="#contact-me" role="button">Contact Me</a>
        </div>
    </div>
    );
};

export default Home;