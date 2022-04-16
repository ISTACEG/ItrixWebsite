import React from 'react';
import { Link } from 'react-router-dom';
import './events.css';
import eventDetails from './events.json';
const hbimg = require('../../assets/hb.JPG');
export default function Events() {
  const eventarray = eventDetails;
  return (
    <div className="EventsContainer">
      <p className="EventMainHeading">EVENTS</p>

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
              {event.eventName}
            </div>
          );
        })}
      </div>
    </div>
  );
}
