import React from 'react';
import { Link } from 'react-router-dom';
import './workshops.css';
import workshopDetails from './workshops.json';
// const hbimg = require('../../assets/hb.JPG');

export default function Workshops() {
  const workshopsArray = workshopDetails;

  return (
    <div className="WorkshopsContainer">
      <p className="WorkshopMainHeading">WORKSHOPS{'   '}
      {/* <Link to="/workshopRegistration" id="registerbtn">
          Register
      </Link> */}
      <a href="https://forms.gle/TrBbTE21MyQsCE8H9" id="registerbtn" class="aquafade">Register</a>
      </p>

      

      <div className="WorkshopObjectContainer">
        {workshopsArray.map((workshop) => {
          return (
            <Link to="/eventdescription" state={workshop}>
              <img
                src={'/eventImages/' + workshop.image}
                className="EventImage"
              />
            </Link>
          );
        })}
      </div>
    </div>
  );
}
