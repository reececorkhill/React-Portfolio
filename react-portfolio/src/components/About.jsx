import React from 'react';
import aboutData from '../../data/about.json'

const About = () => {
    return (
    <div className="col-sm-6 col-md-6 col-lg-6 col-xl-6">
        {aboutData.map((data) => (
           <div className="card mb-3" id="about-card" key={"About"}>
           <img src={data.imgsource} className="card-img-top" alt={data.imgalt}/>
               <div className="card-body">
                   <h1>{data.h1}</h1>
                   <p className="card-text card-text-left">
                   {data.p1}
                   </p>
                   <p className="card-text card-text-left">
                   {data.p2}
                   </p>
                   <p className="card-text card-text-left">
                   {data.p3}
                   </p>
               </div>
           </div> 
        ))}
    </div>
    );
};

export default About;