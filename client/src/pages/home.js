import React from 'react';
import { Parallax } from 'react-parallax';
// import Typical from 'react-typical';
// import { Link } from 'react-router-dom';
import { Link } from 'react-router-dom';
import './style.css';

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
                Serving you a little bit<br />of everything.
              </h1>
              <hr />
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
      <h1 className="space">| | |</h1>
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
          <Link to="/food">
            <div className="menuBtn">Menu</div>
          </Link>
        </div>
      </Parallax>
      <div style={{ height: '100vh' }}></div>
    </div>
  );
}

export default Home;