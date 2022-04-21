import './dashboard.css';
import React from 'react';
import { useState } from 'react';
const logo = require('../../assets/logo.png');
const img1 = require('../../assets/img1.jpeg');
const img2 = require('../../assets/img2.jpeg');
const img3 = require('../../assets/img3.jpeg');
const img4 = require('../../assets/img4.jpeg');
const img5 = require('../../assets/img5.JPG');
const itrixlogo = require('../../assets/itrix.png');
const calender = require('../../assets/calendar.png');

function Details() {
  return (
    <div className="detscontainer">
      <div className="detsbox">
        <div className="circle"></div>
        <div className="highcontent">20+</div>
        <div className="content">Events</div>
      </div>
      <div className="detsbox">
        <div className="circle"></div>
        <div className="highcontent">3+</div>
        <div className="content">Workshops</div>
      </div>
      <div className="detsbox">
        <div className="circle"></div>
        <div className="highcontent">1L+</div>
        <div className="content">Cash Prizes</div>
      </div>
      <div className="detsbox">
        <div className="circle"></div>
        <div className="highcontent">7+</div>
        <div className="content">Internships</div>
      </div>
      <div className="detsbox">
        <div className="circle"></div>
        <div className="highcontent">5+</div>
        <div className="content">Placements</div>
      </div>
    </div>
  );
}

function Gallery() {
  return (
    <div className="gallery">
      <center>
        <h2>Gallery</h2>
      </center>

      {/* <div className="gallerybox">
        <img src={sampimg} />
        <img src={sampimg} />
        <img src={sampimg} />
        <img src={sampimg} />
        <img src={sampimg} />
        <img src={sampimg} />
      </div> */}

      <div class="responsive">
        <div class="gallery">
          <img src={img1} alt="Cinque Terre" width="600" height="400" />
        </div>
      </div>

      <div class="responsive">
        <div class="gallery">
          <img src={img2} alt="Cinque Terre" width="600" height="400" />
        </div>
      </div>

      <div class="responsive">
        <div class="gallery">
          <img src={img3} alt="Cinque Terre" width="600" height="400" />
        </div>
      </div>

      <div class="responsive">
        <div class="gallery">
          <img src={img4} alt="Cinque Terre" width="600" height="400" />
        </div>
      </div>

    </div>
  );
}

function ImageContainer() {

  function parseDate(str) {
    var mdy = str.split('/');
    return new Date(mdy[2], mdy[0]-1, mdy[1]);
}

function datediff(first, second) {
    // Take the difference between the dates and divide by milliseconds per day.
    // Round to nearest whole number to deal with DST.
    return Math.round((second-first)/(1000*60*60*24));
}
  const today = new Date();

  const itrixDate = new Date("May 5, 2022"); 

  const daysToGo = Math.floor((Date.parse(itrixDate) - Date.parse(today)) / 86400000)


  return (
    
    <div className="imgcontainer">
      
      <div className="imgDescription">

        <div className="ideate">
          Ideate and <br />
          Innovate
        </div>

        <div className="calendar">
          <img src={calender} />

          <span>May 5, 6 & 7</span>
        </div>

        <div className="CounterContainer">
          <span id="CountNumber">
              {/* {Count} */}{daysToGo}
          </span>
          <span id="daystogo">
              Days To Go
          </span>
        </div>

      </div>

     

      <img src={logo}></img>

    </div>
  );
}



export default function Dashboard() {

  

  return (
    <>
      {/* <img src={itrixlogo} className="Itrixlogoimg" /> */}
      <ImageContainer />
      <Details />
      <Gallery />
    </>
  );
}
