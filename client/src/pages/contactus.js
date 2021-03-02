import React from 'react';
import emailjs from "emailjs-com";
import "./style.css";

export default function Contact(){

    function sendEmail(e) {
        e.preventDefault();

        emailjs.sendForm('service_0l3it2u', 'template_yhn49dm', e.target, 'user_SZol6TN5lYCfRulaYUxv1')
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });
          e.target.reset();
    }
    return(
        <div className="genBackground">
            <header className="contactHeader">
                Contact Us
            </header>
            <p className="contactInfop">
            Questions, ideas, or feedback are welcome — if not encouraged.<br/> Feel free to contact us at <a href="mailto:heyo@torch.com">heyo@torch.com</a> or complete the form below.
            </p>
            <hr/>
            <div className="contact-form-container">
                <form onSubmit={sendEmail}>
                    <input type="text" className="form-control" placeholder="Name" name="name" required/>
                    <br/>
                    <input type="text" className="form-control" placeholder="Email" name="email" required/>
                    <br/>
                    <input type="text" className="form-control" placeholder="Subject" name="subject" required/>
                    <br/>
                    <textarea className="form-control" placeholder="Message" row="4" name="message" required/>
                    <br/>
                    <input type="submit" className="form-control-submit" value="Send"/>
                </form>
            </div>

        </div>
    )
}
