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

  const scroll = () => {
    const section = document.querySelector( '#moveHere' );
    section.scrollIntoView( { behavior: 'smooth', block: 'start' } );
  };

  return (
    <div className="MainContainer">
      <div className="TopContainer">
        <div className="topimage">
          <img src={'eventImages/' + image} />
        </div>
        <div className="TopRightContainer">
          <p className="EventName">{eventName}</p>
          

          <div className="ButtonContainer">
          <button className="RegisterButton" onClick={scroll}>Explore</button>
          {/* <a href='#moveHere'><button className="RegisterButton">Explore</button></a> */}
          </div>
        </div>
      </div>

      <center>
        <b><p color='Blue' className="E-Name" id="moveHere">DATE</p></b>
        <p className='E-content'>
            <small>
              {date}
            </small>
          </p>
          <Time header="TIME" content={time} />
          <Contact header="CONTACT" content={contact} />
          </center>

      <div className="DescriptionContainer">
        <Description header="DESCRIPTION" content={description} />
        <Description header="ROUND 1" content={round1} />
        <Description header="ROUND 2" content={round2} />
      </div>
      <Rules content={rules} />
    </div>
  );
}

const Contact = (props) => {
  if(props.content == undefined) return null;
  if(props.content[0].name != "")
  {
    return(
      <div>
        <b><p color='Blue' className="E-Name">CONTACT</p></b>
          <p className='E-content'><small>{props.content[0].name}  -{' '} {props.content[0].contactno}</small></p>
          <p className='E-content'><small>{props.content[1].name}  -{' '} {props.content[1].contactno}</small></p>
      </div>
    );
  }
  else {
    return null;
  }
};

const Time = (props) => {
  if(props.content == undefined) return null;
  if(props.content!='')
  {
    return(
      <div>
        <b><p color='Blue' className="E-Name">TIME</p></b>
          <p className='E-content'>
            <small>
            {props.content}
            </small>
          </p>
      </div>
    );
  }else{
    return null;
  }
};

const Description = (props) => {
  if (props.content == undefined) return null;
  if (props.content != '') {
    let descArr = props.content.split('\n')
    return (
      <div className="InnerDescriptionContainer">
        <div className="IconContainer">
          <div className="icon1"></div>
          <p className="Description">{props.header}</p>
        </div>
        {descArr.map((desc) => {
          return <div><p className="DescriptionText">{desc}</p></div>
        })}
       
      </div>
    );
  } else {
    return null;
  }
};

const Rules = (props) => {
  if (props.content != '') {
    let rulesArr = props.content.split('\n')
    return (
      <div className="RulesContainer">
        <div className="RulesIcon">
          <div className="icon2"></div>
          <p className="Rules">Rules</p>
        </div>
        {rulesArr.map((rule) => {
          return <div><p className="RulesContent">{rule}</p></div>
        })}
      </div>
    );
  }
};

export default EventDescription;
