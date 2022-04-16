import './dashboard.css';
import React from 'react';
const logo = require('../../assets/logo1.png');
const sampimg = require('../../assets/img.png');
const itrixlogo = require('../../assets/itrix.png');

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
        <div className="highcontent">4+</div>
        <div className="content">Workshops</div>
      </div>
      <div className="detsbox">
        <div className="circle"></div>
        <div className="highcontent">1.2L+</div>
        <div className="content">Cash Prizes</div>
      </div>
      <div className="detsbox">
        <div className="circle"></div>
        <div className="highcontent">5+</div>
        <div className="content">Internships</div>
      </div>
      <div className="detsbox">
        <div className="circle"></div>
        <div className="highcontent">3+</div>
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
          <img src={sampimg} alt="Cinque Terre" width="600" height="400" />
        </div>
      </div>

      <div class="responsive">
        <div class="gallery">
          <img src={sampimg} alt="Cinque Terre" width="600" height="400" />
        </div>
      </div>

      <div class="responsive">
        <div class="gallery">
          <img src={sampimg} alt="Cinque Terre" width="600" height="400" />
        </div>
      </div>

      <div class="responsive">
        <div class="gallery">
          <img src={sampimg} alt="Cinque Terre" width="600" height="400" />
        </div>
      </div>
    </div>
  );
}

function ImageContainer() {
  return (
    <div className="imgcontainer">
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
