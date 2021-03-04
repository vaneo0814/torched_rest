import React from 'react';
import './style.css';

function About() {
    return (
        <div className="aboutBackground">
            <div className="row">
                <div className="col">
                    <img className="leftAbout" src="https://c.stocksy.com/a/2oN600/z9/1521482.jpg" width="350" alt="coffee">
                    </img>
                </div>
                <div className="col">
                    <img className="rightAbout" src="https://www.kitchensanctuary.com/wp-content/uploads/2020/06/Artisan-Bread-tall2-25.jpg" width="350" alt="loaf">
                    </img>
                </div>
            </div>
            <h1 className="aboutHeader">
                Fresh, Seasonal & Home-Cooked
            </h1>
            <hr />
            <p className="aboutInfo">
                Welcome to torched Restaurant. A one year celebration since opening up in 2020!<br />torched utilizes the highest quality and the freshest ingredients available. Owner/Chef Julia Tornero has <br />created a one-of-a-kind dining experience. Our dining room has an open kitchen, large bay windows <br /> and experienced servers that will ensure a great night out to our guests. Our coffee beans are also imported from <br />Colombia, giving you the best quality food and beans can offer.
            </p>
        </div>
    )
}

export default About;