import { useState } from 'react';
import './footer.css';
import React from 'react';
import { Link } from 'react-router-dom';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import InstagramIcon from '@material-ui/icons/Instagram';
import LanguageIcon from '@material-ui/icons/Language';
import LocalPhoneIcon from '@material-ui/icons/LocalPhone';
const logo = require('../../assets/logo1.png');
const sampimg = require('../../assets/img.png');
const itrixlogo = require('../../assets/itrix.png');

const Footer = (props) => {

  return (
      <>
    <div className="footer">
        
        <div className="contact">
          <div className="individualContact">
            <div className="person">
              Adhis H, <br />
              <span>Chairman.</span>
            </div>
            <div className="phno">
              <span><LocalPhoneIcon /></span> +91 6382 224 303
            </div>
          </div>

          <div className="individualContact">
            <div className="person">
            Balasubramaniam M, <br />
            <span>Overall Coordinator.</span>
            </div>
            <div className="phno">
              <span><LocalPhoneIcon /></span> +91 63854 90321
            </div>
          </div>

          <div className="individualContact">
            <div className="person">
            
            Hariharan S, <br />
            <span>Programming Head.</span>
            </div>
            <div className="phno">
              <span><LocalPhoneIcon /></span> +91 93849 77686
            </div>
          </div>

          <div className="individualContact">
            <div className="person">
            Hrithik K, <br />
            <span>Programming Head.</span>
            </div>
            <div className="phno">
              <span><LocalPhoneIcon /></span> +91 80089 88901
            </div>
          </div>
          





        </div>

        <div className="footer-links">
          <a href="https://www.linkedin.com/company/ista-ceg/mycompany/">
              <span><LinkedInIcon /></span>
              ISTA CEG</a>
          <a href="https://www.instagram.com/ista__ceg/">
            <span><InstagramIcon /></span>
              ista__ceg</a>
          #being_unITed
          <a href="https://itrix.istaceg.in">
              <span><LanguageIcon /></span>
              /itrix.istaceg.in</a>
        </div>
        
    </div>
    <div class='heightInc'> </div>
    </>
  );

}



export default Footer;
