import React from 'react';
import "./style.css";

function Careers(){
    return(
        <div className="genBackground">
            <header className="animate__animated animate__backInUp">
                Join our team
            </header>
            <hr className="careersHR"/>
            <p className="careersInfo">
            We’re always looking for chefs to join our events staff.<br/>Complete the form below or email <a href="mailto:careers@torch.com"> careers@torch.com</a> <br/>with your resume to be considered.
            </p>
            <form>
  <div>
    <input type="text" className="form-control" aria-describedby="emailHelp" placeholder="Name"/>
  </div>
  <div>
    <input type="email" className="form-control" placeholder="Email"/>
  </div>
  <div>
    <input type="number" className="form-control" placeholder="Phone Number"/>
  </div>
  <div>
    <textarea type="text" className="form-control" placeholder="Tell us why you want to join our team?"/>
  </div>
  <h3>
      Resumé
  </h3>
  <button type="submit" className="btn btn-primary">Send</button>
</form>
            

        </div>
    )
}

export default Careers;