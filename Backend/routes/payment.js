require('dotenv').config();
const express = require('express');
const Razorpay = require('razorpay');
const crypto = require('crypto');
const mongoose = require('mongoose');
const User = require('../models/User');
const Event = require('../models/Event');
const otpGenerator = require('otp-generator');

const router = express.Router();

const PaymentDetailsSchema = mongoose.Schema({
  razorpayDetails: {
    orderId: String,
    paymentId: String,
    signature: String,
  },
  success: Boolean,
});

const PaymentDetails = mongoose.model('PaymentDetail', PaymentDetailsSchema);

router.post('/orders', async (req, res) => {
  try {
    const instance = new Razorpay({
      key_id: process.env.RAZORPAY_KEY_ID, // YOUR RAZORPAY KEY
      key_secret: process.env.RAZORPAY_SECRET, // YOUR RAZORPAY SECRET
    });

    const options = {
      amount: 50000,
      currency: 'INR',
      receipt: 'receipt_order_74394',
    };

    const order = await instance.orders.create(options);

    if (!order) {
      console.log('order not created!!!');
      return res.status(500).send('order error::Some error occured');
    }

    res.json(order);
  } catch (error) {
    console.log('error caught');
    res.status(500).send('laster :::' + error);
  }
});

router.post('/success', async (req, res) => {
  try {
    const {
      orderCreationId,
      razorpayPaymentId,
      razorpayOrderId,
      razorpaySignature,
    } = req.body;

    const shasum = crypto.createHmac('sha256', process.env.RAZORPAY_SECRET);
    shasum.update(`${orderCreationId}|${razorpayPaymentId}`);
    const digest = shasum.digest('hex');

    if (digest !== razorpaySignature)
      return res.status(400).json({ msg: 'Transaction not legit!' });

    const newPayment = PaymentDetails({
      razorpayDetails: {
        orderId: razorpayOrderId,
        paymentId: razorpayPaymentId,
        signature: razorpaySignature,
      },
      success: true,
    });

    await newPayment.save();

    try {
      const { name, email, phone, college, events } = req.body;
      let eventRegistrationId =
        'ITE-' +
        otpGenerator.generate(8, {
          lowerCaseAlphabets: false,
          specialChars: false,
        });
      let user = await User.findOne({ email });
      if (!user) {
        user = new User({
          name,
          email,
          phone,
          college,
          eventsRegistered: events,
          eventRegistrationId,
        });
      }

      // console.log(user);
      // for (let eventId of events) {
      // 	const event = await Event.findOne({ eventId });
      // 	event.registeredUsers.push(user._id);
      // 	await event.save();
      // }
      const savedUser = await user.save();
    } catch (err) {
      console.log(err);
      return res.status(500).json({ msg: 'Server Error' });
    }

    res.json({
      msg: 'success',
      orderId: razorpayOrderId,
      paymentId: razorpayPaymentId,
    });
  } catch (error) {
    res.status(500).send(error);
  }
});

module.exports = router;
