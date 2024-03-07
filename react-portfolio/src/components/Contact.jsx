import React from 'react';

const Contact = () => {
    return (
    <div className="row">
        <form>
              <div className="form-group">
                <label htmlFor="FormControlInput1">Name</label>
                <input type="text" className="form-control" id="FormControlInput1" placeholder="Enter Name"/>
              </div>
              <div className="form-group">
                <label htmlFor="FormControlInput2">Email address</label>
                <input type="email" className="form-control" id="FormControlInput1" placeholder="Enter Email Address"/>
              </div>
              <div className="form-group">
                <label htmlFor="FormControlTextarea1">Message</label>
                <textarea className="form-control" id="FormControlTextarea1" rows="5" placeholder="Enter Message"></textarea>
              </div>
              <button type="submit" className="btn btn-outline-light btn-lg">Submit</button>
            </form>
    </div>
    );
};

export default Contact;