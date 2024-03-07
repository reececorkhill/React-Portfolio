import React from 'react';
import homeData from '../../data/home.json'

const Home = () => {
    return (
    <div className="row work-row pt-5 pb-5">
        {homeData.map((data) => (
            <div className="jumbotron" key={"Home"}>
            <img src={data.imgsource} className="rounded" alt={data.imgalt} id="jumbotron-image"/>
            <h1 className="display-4 pt-4 pb-2">{data.h1}</h1>
            <h2 className="display-7 pt-4 pb-2">{data.h2}</h2>
            <p className="lead">
                {data.p}
            </p>
            <a className="btn btn-primary btn-lg" href="/About" role="button">About Me</a>
        </div>
        ))}
    </div>
    );
};

export default Home;