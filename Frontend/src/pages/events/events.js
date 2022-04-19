import React from 'react';
import { Link } from 'react-router-dom';
import './events.css';
import eventDetails from './events.json';

export default function Events() {
  const eventarray = eventDetails;
  return (
    <div className="EventsContainer">
      <p className="EventMainHeading">
        EVENTS {'   '}
        {/* <Link to="/registration" id="registerbtn">
        
        </Link> */}
        <a href="/registration" id="registerbtn" class="aquafade">Register</a>
      </p>
      <div className="EventObjectContainer">
        {eventarray.map((event) => {
          return (
            <div className="EventObject">
              <Link to="/eventdescription" state={event}>
                <img
                  src={'/eventImages/' + event.image}
                  className="EventImage"
                />
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
}