import React from 'react';
import './style.css';

function About() {
    return (
        <div className="genBackground">
            <div className="row">
                <div className="col">
                    <img className="leftAbout" src=" https://www.nespresso.com/ncp/res/uploads/recipes/nespresso-recipes-Latte-Art-Tulip.jpg" width="500" alt="coffee">
                    </img>
                </div>
                <div className="col">
                    <img className="rightAbout" src="https://static.onecms.io/wp-content/uploads/sites/37/2020/03/31/RU317429.jpg" width="700" alt="loaf">
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