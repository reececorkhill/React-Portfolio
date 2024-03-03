import React from 'react';

const Home = () => {
    return (
    <div className="row jumbotron-row">
        <div className="jumbotron">
            <img src="" className="rounded" alt="Reece Corkhill" id="jumbotron-image"/>
            <h1 className="display-4 pt-4 pb-2">Reece Corkhill</h1>
            <h2 className="display-7 pt-4 pb-2">Front-end Web Developer</h2>
            <p className="lead">
                I'm a Front-end Web Developer and this is my portfolio where you can find out more about me,
                my projects, skills and how to contact me.
            </p>
            <a className="btn btn-primary btn-lg" href="#contact-me" role="button">Contact Me</a>
        </div>
    </div>
    );
};

export default Home;