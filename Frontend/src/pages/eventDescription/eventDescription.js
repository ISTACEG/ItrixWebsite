import React from 'react';
import './eventDescription.css';
import { useLocation } from 'react-router-dom';

function EventDescription() {
  const param = useLocation().state;
  const {
    eventName,
    description,
    round1,
    round2,
    rules,
    date,
    time,
    image,
    contact,
  } = param;

  return (
    <div className="MainContainer">
      <div className="TopContainer">
        <div className="topimage">
          <img src={'eventImages/' + image} />
        </div>
        <div className="TopRightContainer">
          <p className="EventName">{eventName}</p>
          <div className="ButtonContainer">
            <button className="ExploreButton">Explore</button>
          </div>
        </div>
      </div>
      <div className="MidContainer">
        <div className="MidImage">
          {date} {time}
        </div>
        <div className="MidImage">{contact[0].name}</div>
      </div>
      <div className="DescriptionContainer">
        <Description header="DESCRIPTION" content={description} />
        <Description header="ROUND 1" content={round1} />
        <Description header="ROUND 2" content={round2} />
      </div>
      <Rules content={rules} />
    </div>
  );
}

const Description = (props) => {
  if (props.content != '') {
    return (
      <div>
        <div className="InnerDescriptionContainer">
          <div className="IconContainer">
            <div className="icon1"></div>
            <p className="Description">{props.header}</p>
          </div>
          <p className="DescriptionText">{props.content}</p>
        </div>
      </div>
    );
  } else {
    return null;
  }
};

const Rules = (props) => {
  if (props.content != '') {
    return (
      <div className="RulesContainer">
        <div className="RulesIcon">
          <div className="icon2"></div>
          <p className="Rules">Rules</p>
        </div>
        <p className="RulesContent">{props.content}</p>
      </div>
    );
  }
};

export default EventDescription;
