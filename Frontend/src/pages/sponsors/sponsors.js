import React from 'react';
import './sponsors.css';

export default function Sponsors() {
  return (
    <div className="SponsorsContainer">
      <p className="SponsorsMainHeading">SPONSORS</p>

      {/* <center>
        <img src="cs.gif"></img>
      </center> */}
      <center><p className='SponsorsSubHeading'>TITLE SPONSOR</p></center>
      <div className="SponsorsObjectContainer">
        <div className="SponsorsObject">
            <center><img src='impigerWhite.png' className="SponsorsImage"/></center>
        </div>
      </div>

      <center><p className='SponsorsSubHeading'>RECRUITMENT PARTNERS</p></center>
      <div className="SponsorsObjectContainer">
        <div className="SponsorsObject">
            <center><img src='impigerWhite.png' className="SponsorsImage"/></center>
        </div>
        <div className="SponsorsObject">
            <center><img src='briskinfosec.png' className="SponsorImage"/></center>
        </div>        
        <div className="SponsorsObject">
            <center><img src='celestica.svg' className="SponsorsImage"/></center>
        </div>
        <div className="SponsorsObject">
            <center><img src='softrate.png' className="SponsorsImage"/></center>
        </div>
      </div>

      <center><p className='SponsorsSubHeading'>EVENTS SPONSOR</p></center>
      <div className="SponsorsObjectContainer">
        <div className="SponsorsObject">
            <center><img src='DigitalOcean.svg' className="SponsorsImage"/></center>
        </div>
      </div>


      <center><p className='SponsorsSubHeading'>LOGISTICS SPONSOR</p></center>
      <div className="SponsorsObjectContainer">
        <div className="SponsorsObject">
            <center><img src='uniqtechnologies.png' className="SponsorsImage"/></center>
        </div>
      </div>

      {/* <center><p className='SponsorsSubHeading'>Media Sponsor</p></center>
      <div className="SponsorsObjectContainer">
        <div className="SponsorsObject">
            <img src='celstica.svg' className="SponsorsImage"/>
        </div>
      </div> */}


    </div>


  );
}
