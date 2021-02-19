import React from 'react';
import { Parallax } from 'react-parallax';
import "./style.css"


function Events() {
    return (
        <div className="genBackground">
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
                            A New<br />Way to <br/>Dine
                        </h1>
                    </div>
                    <div className="col dineInfo">
                        Torch offers privacy, distancing, and customization impossible to achieve in most private dining rooms. We offer intimate events which are perfect for every event.
                        (Please note: all events will take place indoors until further notice.)
                        <br/>
                        <button className="bookBtn">Book Event</button>
              </div>
                </div>
        </div>
    )
}

export default Events;