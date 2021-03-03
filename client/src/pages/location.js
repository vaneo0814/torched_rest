import React, { Component } from 'react';
import "./style.css";
import { Map, InfoWindow, Marker, GoogleApiWrapper } from 'google-maps-react';
import Carousel from 'react-bootstrap/Carousel';

//google maps styling
const style = {
    width: '100%',
    height: '600px'
};
const containerStyle = {
    position: 'absolute',
    width: '100%',
    height: '600px',
    backgroundColor: 'black',
    marginTop: '-65px'
};

const carouselstyle = {
    width: '100%',
    height: '600px'
}

class Location extends Component {
    render() {
        return (
            <div className="locationBackground">
                <Carousel style={carouselstyle}>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src="https://images.unsplash.com/photo-1554118811-1e0d58224f24?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MXx8Y2FmZXxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80"
                            alt="First slide"
                        />
                        <Carousel.Caption>
                            <h1 className="locationHeader">Hours & <br /> Location</h1>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src="https://images.unsplash.com/photo-1445116572660-236099ec97a0?ixid=MXwxMjA3fDB8MHxzZWFyY2h8M3x8Y29mZmVlJTIwc2hvcHxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80"
                            alt="Second slide"
                        />

                        <Carousel.Caption>
                            <h1 className="locationHeader">Hours & <br /> Location</h1>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src="https://fd-blog-uploads.s3.eu-west-1.amazonaws.com/wp-content/uploads/2018/04/24160604/latteart.jpg"
                            alt="Third slide"
                        />

                        <Carousel.Caption>
                            <h1 className="locationHeader">Hours & <br /> Location</h1>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
                <div className="locationInfoContainer">
                    <p className="locationInfo">
                        <a className="locationAtag" href="https://www.google.com/maps/place/156+Sullivan+St,+New+York,+NY+10012/@40.727484,-74.0039922,17z/data=!3m1!4b1!4m8!1m2!2m1!1s156+Sullivan+Street,+Cedar+Grove,+NJ+07009!3m4!1s0x89c2598df2082143:0xadbe077fd9ab70f!8m2!3d40.72748!4d-74.0018035" target="__blank">
                            156 Sullivan St,<br />New York, NY 10012
                        </a>
                        <br /><a  className="locationAtag" href="tel:+1123-456-7890">123-456-7890</a>
                        <hr />
                        Tuesday - Sunday<br />9am - 5pm
                        </p>

                </div>
                <div className="buttonContainer">
                    <a href="https://www.google.com/maps/place/156+Sullivan+St,+New+York,+NY+10012/@40.727484,-74.0039922,17z/data=!3m1!4b1!4m8!1m2!2m1!1s156+Sullivan+Street,+Cedar+Grove,+NJ+07009!3m4!1s0x89c2598df2082143:0xadbe077fd9ab70f!8m2!3d40.72748!4d-74.0018035" target="__blank">
                        <button className="getDirections">Get Directions</button>                        
                        </a>
                </div>

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
        )
    }
}
export default GoogleApiWrapper({
    apiKey: ("AIzaSyDSuNw_jzphn25iHrK7P0sPp_PvWRy0r9I")
})(Location)