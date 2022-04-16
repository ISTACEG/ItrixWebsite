import './navbar.css';
import React from 'react';
import { Link } from 'react-router-dom';
const logo = require('../../assets/logo1.png');
const sampimg = require('../../assets/img.png');
const itrixlogo = require('../../assets/itrix.png');

export default function Navbar() {
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

      <div className="nav-links">
        <div>
          <img src={itrixlogo} className="Itrixlogoimg" />
        </div>
        <div className="quicklinkss">
          <Link to="/events">Events</Link>
          <Link to="/workshops">Workshops</Link>
          <Link to="/accomodation">Accomodation</Link>
          <Link to="/sponsors">Sponsors</Link>
          <Link to="/team">Teams</Link>
          <Link to="/contact">Contact Us</Link>
        </div>
      </div>
    </div>
  );
}
