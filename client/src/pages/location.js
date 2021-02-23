import React, { Component } from 'react';
import "./style.css";
import { Map, InfoWindow, Marker, GoogleApiWrapper } from 'google-maps-react';
import Carousel from 'react-bootstrap/Carousel';

const style = {
    maxWidth: "450px",
    height: "350px",
    overflowX: "hidden",
    overflowY: "hidden"
};
const containerStyle = {
    maxWidth: "450px",
    height: "350px"
};

class Location extends Component {
    render() {
        return (
            <div className="genBackground">
                <div className="imageContainer">
                    <Carousel>
                        <Carousel.Item>
                            <img
                                className="d-block w-100"
                                src="https://i.pinimg.com/originals/57/85/22/57852274d222b1178d69f91198d1ab98.jpg"
                                alt="First slide"
                            />
                            <Carousel.Caption>
                                <h3>First slide label</h3>
                                <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                className="d-block w-100"
                                src="holder.js/800x400?text=Second slide&bg=282c34"
                                alt="Second slide"
                            />

                            <Carousel.Caption>
                                <h3>Second slide label</h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                className="d-block w-100"
                                src="holder.js/800x400?text=Third slide&bg=20232a"
                                alt="Third slide"
                            />

                            <Carousel.Caption>
                                <h3>Third slide label</h3>
                                <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                    </Carousel>
                    <h1 className="locationHeader">Hours <br />& Location</h1>
                </div>
                <div className="locationInfoContainer">
                    <p className="locationInfo">
                        <a href="https://www.google.com/maps/place/156+Sullivan+St,+New+York,+NY+10012/@40.727484,-74.0039922,17z/data=!3m1!4b1!4m8!1m2!2m1!1s156+Sullivan+Street,+Cedar+Grove,+NJ+07009!3m4!1s0x89c2598df2082143:0xadbe077fd9ab70f!8m2!3d40.72748!4d-74.0018035" target="__blank">
                            156 Sullivan St,<br />New York, NY 10012
                        </a>
                        <br /><a href="tel:+1123-456-7890">123-456-7890</a>
                        <hr />
                        Tuesday - Sunday<br />9am - 5pm
                        </p>

                </div>
                <div className="mapContainer">
                    <Map google={this.props.google} zoom={14} style={style} containerStyle={containerStyle}>

                        <Marker onClick={this.onMarkerClick}
                            name={'Current location'} />

                        <InfoWindow onClose={this.onInfoWindowClose}>
                            {/* <div>
                        <h1>{this.state.selectedPlace.name}</h1>
                    </div> */}
                        </InfoWindow>
                    </Map>
                </div>
            </div>
        )
    }
}
export default GoogleApiWrapper({
    apiKey: ("AIzaSyDSuNw_jzphn25iHrK7P0sPp_PvWRy0r9I")
})(Location)