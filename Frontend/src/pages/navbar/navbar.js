import './navbar.css';
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
const logo = require('../../assets/logo1.png');
const sampimg = require('../../assets/img.png');
const itrixlogo = require('../../assets/itrix.png');

function loadScript(src) {
  return new Promise((resolve) => {
    const script = document.createElement('script');
    script.src = src;
    script.onload = () => {
      resolve(true);
    };
    script.onerror = () => {
      resolve(false);
    };
    document.body.appendChild(script);
  });
}

export default function Navbar() {
  useEffect(() => {
    document.getElementById('navLinks').addEventListener('click', () => {
      document.getElementById('nav-check').checked = false;
    });
  }, []);
  return (
    <div className="nav">
      <input type="checkbox" id="nav-check" />
      <div className="nav-btn">
        <label htmlFor="nav-check">
          <span></span>
          <span></span>
          <span></span>
        </label>
      </div>
      <div id="ItrixImgSmallScreen">
        <Link to="/dashboard">
          <img src={itrixlogo} className="Itrixlogoimg" />
        </Link>
      </div>

      <div className="nav-links" id="navLinks">
        <div id="ItrixImgLargeScreen">
          <Link to="/dashboard">
            <img src={itrixlogo} className="Itrixlogoimg" />
          </Link>
        </div>
        <div className="quicklinkss">
          <Link to="/events">Events</Link>
          <Link to="/workshops">Workshops</Link>
          <Link to="/accomodation">Accomodation</Link>
          <Link to="/sponsors">Sponsors</Link>
          <Link to="/team">Team</Link>
        </div>
      </div>
    </div>
  );
}
