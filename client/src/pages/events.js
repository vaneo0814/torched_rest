import React, { Component } from 'react';
import { Parallax } from 'react-parallax';
import emailjs from "emailjs-com";
import Modal from "./modal.js";
import "./style.css";

function sendEventInfo(e) {
    e.preventDefault();

    emailjs.sendForm('service_0l3it2u', 'template_geo8phj', e.target, 'user_SZol6TN5lYCfRulaYUxv1')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset();
}

class Events extends Component {
    state = {
        eventModalIsOpen: false
    };

    //book event modal function
    openModal = () => {
        this.setState({ eventModalIsOpen: true });
    };

    closeModal = () => {
        this.setState({ eventModalIsOpen: false });
    };
    

    render() {
        return (
            <div className="chefsBackground">
                <Parallax className="eventsContainer" strength={500}>
                    <div style={{ height: 1000 }}>
                        <header className="eventsHeader">
                            Private Events
        </header>
                    </div>
                </Parallax>
                <div className="row eventsContent">
                    <div className="col leftEvents">
                        <h1 className="newWaytoDine">
                            A New<br />Way to <br />Dine
                        </h1>
                    </div>
                    <div className="col dineInfo">
                        Torch offers privacy, distancing, and customization impossible to achieve in most private dining rooms. We offer intimate events which are perfect for every event.
                        (Please note: all events will take place indoors until further notice.)
                        <br />
                        <button className="bookBtn" onClick={this.openModal}>Book Event</button>
                    </div>
                </div>

                <Modal open={this.state.eventModalIsOpen} onClose={this.closeModal}>
                    <button className="closeBtnEvents" onClick={this.closeModal}>x</button>
                    <div className="bookEvent-form-container">
                       
                <form onSubmit={sendEventInfo}>
                    <input type="text" className="form-control" placeholder="Name" name="name" required/>
                    <br/>
                    <input type="email" className="form-control" placeholder="Email" name="email" required/>
                    <br/>
                    <input type="tel" className="form-control" placeholder="Phone number" name="phone" pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" required/>
                    <br/>
                    <small>Desired Date</small>
                    <input type="date" className="form-control" placeholder="Event Date" name="date" max="2022-01-01" required/>
                    <br/>
                    <small>Start Time</small>
                    <input type="time" className="form-control" name="start" required/>
                    <br/>
                    <small>End Time</small>
                    <input type="time" className="form-control" name="end" required/>
                    <br/>
                    <input type="number" className="form-control" name="amount" placeholder="Amount of people" min="2" max="100" required/>
                    <br/>
                    <input type="text" className="form-control" name="occassion" placeholder="Type of Event" required/>
                    <br/>
                    <textarea className="form-control" placeholder="Additional Information" row="4" name="information"/>
                    <br/>
                    <input type="submit" className="form-control-submitEventBtn" value="Request Event"/>
                </form>
            </div>
                </Modal>
            </div>
        )
    }
}

export default Events;