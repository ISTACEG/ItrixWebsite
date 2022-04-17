import React from 'react';
import './team.css';

import teamDetails from './Team.json';
import officeBearerDetails from './officeBearers.json';
export default function Team() {
  const teamArray = teamDetails;
  const officeBearersArray = officeBearerDetails;
  return (
    <div className="TeamsContainer">
      <p className="TeamMainHeading">Office Bearers</p>

      <div className="TeamObjectContainer">
        {officeBearersArray.map((team) => {
          return (
            <div className="TeamObject">
              <img src={'/teamImages/' + team.image} className="TeamImage" />
              <h2>
                <div align="left">{team.name}</div>
                <div align="right">{team.role}</div>
              </h2>
            </div>
          );
        })}
      </div>

      <p className="TeamMainHeading">Website Team</p>

      <div className="TeamObjectContainer">
        {teamArray.map((team) => {
          return (
            <div className="TeamObject">
              <img src={'/teamImages/' + team.image} className="TeamImage" />
              <h2>
                <div align="left">{team.name}</div>
                <div align="right">{team.role}</div>
              </h2>
            </div>
          );
        })}
      </div>
    </div>
  );
}

// <>
//       <p className="TeamHeader">Team</p>
//       <div className="TeamContainer">
//         <div className="TeamImagecontainer">
//           <img src={TeamPhoto1} className="TeamImage" alt="Person1" />
//           <p className="PersonContainer">Person1</p>
//         </div>
//         <div className="TeamImagecontainer">
//           <img src={TeamPhoto1} className="TeamImage" alt="Person2" />
//           <p className="PersonContainer">Person2</p>
//         </div>
//         <div className="TeamImagecontainer">
//           <img src={TeamPhoto1} className="TeamImage" alt="Person3" />
//           <p className="PersonContainer">Person3</p>
//         </div>
//         <div className="TeamImagecontainer">
//           <img src={TeamPhoto1} className="TeamImage" alt="Person4" />
//           <p className="PersonContainer">Person4</p>
//         </div>
//       </div>
//     </>
