import React, { useState, useEffect } from "react";
import { Parallax } from 'react-parallax';
// import Typical from 'react-typical';
// import { Link } from 'react-router-dom';
import './style.css';


const image1 =
  "https://images.unsplash.com/photo-1498092651296-641e88c3b057?auto=format&fit=crop&w=1778&q=60&ixid=dW5zcGxhc2guY29tOzs7Ozs%3D";
const image2 =
  "https://brightcove04pmdo-a.akamaihd.net/5104226627001/5104226627001_5297440765001_5280261645001-vs.jpg?pubId=5104226627001&videoId=5280261645001";
const image3 =
  "https://img00.deviantart.net/2bd0/i/2009/276/c/9/magic_forrest_wallpaper_by_goergen.jpg";
const image4 =
  "https://images.fineartamerica.com/images/artworkimages/mediumlarge/1/empire-state-building-black-and-white-square-format-john-farnan.jpg";

const inlineStyle = {
  background: '#fff',
  left: '50%',
  top: '50%',
  position: 'absolute',
  padding: '20px',
  transform: 'translate(-50%, -50%)',
}


function Home() {
  return (
    <div className="homeContainer">
      <Parallax className="frontContainer" strength={500}>
        <div style={{ height: 1000 }}>

        </div>
      </Parallax>
      <Parallax className="middleContainer" strength={-200} >
        <div style={{ height: 500 }}>
          <div className="row">
            <div className="col leftCol">
              <h1 className="leftHeader">
                Serving you a little bit<br/>of everything.
              </h1>
              <hr/>
              <p>
              Resident brings chefs from the world’s top restaurants to host intimate dinners in unique, luxury spaces.
              Reserve your seats below or book a private event by emailing hi@meetresident.com. We can't wait to host you!
              </p>
            </div>
            <div className="col">
              <img className="rightCol" src="https://i.postimg.cc/rsqqnD85/IMG-0747.jpg" width="900" alt="food">
              </img>
            </div>
          </div>
        </div>
      </Parallax>
      <h1>| | |</h1>
      <Parallax
        className="lastContainer"
        strength={200}
        renderLayer={percentage => (
          <div
            style={{
              position: 'absolute',
              width: '100px',
              height: '100px',
              borderRadius: '50%',
              background: `rgba(255, 123, 23, ${percentage * 1})`,
              left: '50%',
              top: '50%',
              transform: `translate(-50%, -50%) scale(${percentage * 5})`,
            }}
          >
          </div>
        )}
      >
        <div style={{ height: 500 }}>
          <div className="menuBtn">Menu</div>
        </div>
      </Parallax>
      <div style={{ height: '100vh' }}></div>
    </div>
  );
}

export default Home;