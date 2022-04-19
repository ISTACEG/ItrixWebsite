require("dotenv").config();
const PaymentDetails = require("../models/Payment");
const Razorpay = require("razorpay");
const crypto = require("crypto");
const otpGenerator = require("otp-generator");

exports.orders = async (req, res) => {

	try {
		const instance = new Razorpay({
			key_id: process.env.RAZORPAY_KEY_ID, // YOUR RAZORPAY KEY
			key_secret: process.env.RAZORPAY_SECRET, // YOUR RAZORPAY SECRET
		});

		const options = {
			amount: req.body.price,
			currency: "INR",
			receipt: "receipt_order_74394",
		};

		const order = await instance.orders.create(options);

		if (!order) {
			console.log("order not created!!!");
			return res.status(500).send("order error::Some error occured");
		}

		res.json(order);
	} catch (error) {
		console.log("error caught", error);
		res.status(500).send("laster :::" + error);
	}
};

exports.paymentSuccess = async (req, res, next) => {
	try {
		const {
			orderCreationId,
			razorpayPaymentId,
			razorpayOrderId,
			razorpaySignature,
		} = req.body;

		const shasum = crypto.createHmac("sha256", process.env.RAZORPAY_SECRET);
		shasum.update(`${orderCreationId}|${razorpayPaymentId}`);
		const digest = shasum.digest("hex");

		if (digest !== razorpaySignature)
			return res.status(400).json({ msg: "Transaction not legit!" });

		const newPayment = PaymentDetails({
			razorpayDetails: {
				orderId: razorpayOrderId,
				paymentId: razorpayPaymentId,
				signature: razorpaySignature,
			},
			success: true,
		});
		req.orderId = razorpayOrderId;
		req.paymentId = razorpayPaymentId;
		await newPayment.save();
		next();
	} catch (error) {
		res.status(500).send(error);
	}
};
