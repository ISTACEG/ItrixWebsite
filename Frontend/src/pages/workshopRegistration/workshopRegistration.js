import React, { Component } from 'react';
import { useState } from 'react';
import Select from 'react-select';
import { useNavigate } from 'react-router-dom';
import makeAnimated from 'react-select/animated';
import eventDetails from '../workshops/workshops.json';
import './workshopRegistration.css';
import env from 'react-dotenv';
import axios from 'axios';

var options = [];

export default function WprkshopRegistration() {
  const navigate = useNavigate();
  const [userName, setUserName] = useState('');
  const [collegeName, setCollegeName] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNo, setPhoneNo] = useState('');
  const [selectedOption, setSelectedOption] = useState([]);

  const [submitted, setSubmitted] = useState(false);

  function loadScript(src) {
    return new Promise((resolve) => {
      const script = document.createElement('script');
      script.src = src;
      script.onload = () => {
        resolve(true);
      };
      script.onerror = () => {
        resolve(false);
      };
      document.body.appendChild(script);
    });
  }

  async function handleSubmit(e) {
    console.log(selectedOption);
    e.preventDefault();
    var eventsInterested = [];
    for (let i in selectedOption) {
      // console.log(selectedOption[i])
      eventsInterested.push(selectedOption[i].value);
    }

    const workshop = selectedOption.value

    console.log(workshop);
    // return;

    const configuration = {
      method: 'post',
      url: `${env.url}/workshop/enroll`,
      data: {
        name: userName,
        college: collegeName,
        email: email,
        phone: phoneNo,
        workshop: workshop,
      },
    };
    const res = await loadScript(
      'https://checkout.razorpay.com/v1/checkout.js'
    );

    if (!res) {
      alert('Razorpay SDK failed to load. Please check your connection.');

      return;
    }

    const result = await axios.post(`${env.url}/payments/orders`, {price: 75000});

    if (!result) {
      alert('Server error. Please check your connection.');
      return;
    }

    const { amount, id: order_id, currency } = result.data;

    const options = {
      key: env.RAZORPAY_KEY_ID, // Enter the Key ID generated from the Dashboard
      amount: amount.toString(),
      currency: currency,
      name: 'ISTA CEG',
      description: 'ITRIX\'22 Event/Workshop Registration',
      image: 'itrix.png',
      order_id: order_id,
      handler: async function (response) {
        const data = {
          orderCreationId: order_id,
          razorpayPaymentId: response.razorpay_payment_id,
          razorpayOrderId: response.razorpay_order_id,
          razorpaySignature: response.razorpay_signature,
          name: userName,
          college: collegeName,
          email: email,
          phone: phoneNo,
          workshop: workshop,
        };

        const result = await axios.post(`${env.url}/payments/success-workshop`, data);
        console.log(result);
        if (result.data.status === "Payment Success") {

          alert(
            "You have registered successfully for Itrix'22. Please check your mail regarding the same."
          );
          navigate('/dashboard');
        } else {
          alert('Transaction failed!!');
        }
      },
      prefill: {
        name: userName,
        email: email,
        contact: phoneNo,
      },
      notes: {
        address: '---',
      },
      theme: {
        color: '#61dafb',
      },
    };

    const paymentObject = new window.Razorpay(options);
    paymentObject.open();

    setSubmitted(true);
  }
  
  
  
  const eventsArray = eventDetails;
  options = [];
  for (let i in eventsArray) {
    let obj = {
      value: eventsArray[i]['id'],
      label: eventsArray[i]['eventName'],
    };
    options.push(obj);
  }

  const animatedComponents = makeAnimated();
  function MultiSelect() {
    return (
      <div>
        <Select
          className="inputmultiselect"
          closeMenuOnSelect={false}
          components={animatedComponents}
          defaultValue={selectedOption}
          onChange={setSelectedOption}
          placeholder="Workshops Interested..."
          isMulti={false}
          options={options}
        />
      </div>
    );
  }

  return (
    <div className="formcontainer">
      <form name="form" className="loginForm" onSubmit={handleSubmit}>
        <div className="loginname">WORKSHOP REGISTRATION</div>

        <input
          type="text"
          name="userName"
          value={userName}
          placeholder="Name"
          onChange={(e) => setUserName(e.target.value)}
          className="inputselect"
          required
        />

        <input
          type="text"
          name="collegeName"
          value={collegeName}
          placeholder="College Name"
          onChange={(e) => setCollegeName(e.target.value)}
          className="inputselect"
          required
        />

        <input
          type="email"
          name="email"
          value={email}
          placeholder="Email"
          onChange={(e) => setEmail(e.target.value)}
          required
          className="inputselect"
        />
        <input
          type="tel"
          name="phoneNo"
          value={phoneNo}
          placeholder="Phone No"
          onChange={(e) => setPhoneNo(e.target.value)}
          required
          className="inputselect"
          pattern="[1-9]{1}[0-9]{9}"
          maxLength="10"
        />

        <MultiSelect />
        <button
          type="submit"
          className="loginButton"
          style={{
            height: '6.75vh',
            marginTop: '0.3em',
            marginBottom: '3em',
          }}
        >
          REGISTER AND PAY
        </button>
      </form>
    </div>
  );
}
