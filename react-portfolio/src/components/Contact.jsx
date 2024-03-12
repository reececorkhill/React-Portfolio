import React from 'react';

const Contact = () => {
    return (
    <div className="row pt-5 pb-5">
      <div className="col-sm-12 col-md-12 col-lg-12 col-xl-12">
          <form>
                <h1>Contact Me</h1>
                <div className="form-group">
                  <label for="FormControlInput1">Name</label>
                  <input type="text" className="form-control" id="FormControlInput1" placeholder="Enter Name"/>
                </div>
                <div className="form-group">
                  <label for="FormControlInput2">Email address</label>
                  <input type="email" className="form-control" id="FormControlInput1" placeholder="Enter Email Address"/>
                </div>
                <div className="form-group">
                  <label for="FormControlTextarea1">Message</label>
                  <textarea className="form-control" id="FormControlTextarea1" rows="3" placeholder="Your Message"></textarea>
                </div>
                <button type="submit" className="btn btn-outline-light btn-lg" id="form-submit-button">Submit</button>
          </form>
      </div>
    </div> 
    );
};

export default Contact;