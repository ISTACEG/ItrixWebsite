import React from 'react';
import './team.css';
const TeamPhoto1 = require('../../assets/logo1.png');

export default function Team() {
  return (
    <>
      <p className="TeamHeader">Team</p>
      <div className="TeamContainer">
        <div className="TeamImagecontainer">
          <img src={TeamPhoto1} className="TeamImage" alt="Person1" />
          <p className="PersonContainer">Person1</p>
        </div>
        <div className="TeamImagecontainer">
          <img src={TeamPhoto1} className="TeamImage" alt="Person2" />
          <p className="PersonContainer">Person2</p>
        </div>
        <div className="TeamImagecontainer">
          <img src={TeamPhoto1} className="TeamImage" alt="Person3" />
          <p className="PersonContainer">Person3</p>
        </div>
        <div className="TeamImagecontainer">
          <img src={TeamPhoto1} className="TeamImage" alt="Person4" />
          <p className="PersonContainer">Person4</p>
        </div>
      </div>
    </>
  );
}
