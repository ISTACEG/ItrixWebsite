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
            <center><a href='https://www.impigertech.com/'><img src='impigerWhite.png' className="SponsorsImage"/></a></center>
        </div>
      </div>

      <center><p className='SponsorsSubHeading'>RECRUITMENT PARTNERS</p></center>
      <div className="SponsorsObjectContainer">
        <div className="SponsorsObject">
            <center><a href='https://www.impigertech.com/'><img src='impigerWhite.png' className="SponsorsImage"/></a></center>
        </div>
        <div className="SponsorsObject">
            <center><a href='https://www.briskinfosec.com/'><img src='briskinfosec.png' className="SponsorImage"/></a></center>
        </div>        
        <div className="SponsorsObject">
            <center><a href='https://www.celestica.com/'><img src='celestica.svg' className="SponsorsImage"/></a></center>
        </div>
        <div className="SponsorsObject">
            <center><a href='https://softrateindia.com/'><img src='softrate.png' className="SponsorsImage"/></a></center>
        </div>
      </div>

      <center><p className='SponsorsSubHeading'>EVENTS SPONSOR</p></center>
      <div className="SponsorsObjectContainer">
        <div className="SponsorsObject">
            <center><a href='https://www.digitalocean.com/'><img src='DigitalOcean.svg' className="SponsorsImage"/></a></center>
        </div>
      </div>


      <center><p className='SponsorsSubHeading'>LOGISTICS SPONSOR</p></center>
      <div className="SponsorsObjectContainer">
        <div className="SponsorsObject">
            <center><a href='https://www.uniqtechnologies.co.in/'><img src='uniqtechnologies.png' className="SponsorsImage"/></a></center>
        </div>
      </div>

      <center><p className='SponsorsSubHeading'>Media Sponsor</p></center>
      <div className="SponsorsObjectContainer">
        <div className="SponsorsObject">
            <center><a href='https://www.celestica.com/'><img src='celstica.svg' className="SponsorsImage"/></a></center>
        </div>
      </div>


    </div>


  );
}
