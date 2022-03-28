const Event = require("../models/Event");
const Workshop = require("../models/Workshop");

exports.createEvent = async (req, res) => {
	try {
		const { eventId, name, description, date, time } = req.body;
		const event = new Event({
			eventId,
			name,
			description,
			date,
			time,
		});
		const savedEvent = await event.save();
		console.log("Event created!");
		return res
			.status(201)
			.json({ msg: "Event created!", event: savedEvent });
	} catch (err) {
		console.log(err);
		return res.status(500).json({ msg: "Server Error" });
	}
};

exports.getEventInfo = async (req, res) => {
	try {
		const { eventId } = req.body;
		const event = await Event.findOne({ eventId })
			.populate("registeredUsers", "name email eventRegistrationId -_id")
			.select("-_id eventId name description date time registeredUsers");
		return res.json({
			event,
			totalRegistrations: event.registeredUsers.length,
		});
	} catch (err) {
		console.log(err);
		return res.status(500).json({ msg: "Server Error" });
	}
};

exports.createWorkshop = async (req, res) => {
	try {
		const { workshopId, name, description, date, time } = req.body;
		const workshop = new Workshop({
			workshopId,
			name,
			description,
			date,
			time,
		});
		const savedWorkshop = await workshop.save();
		console.log("Workshop created!");
		return res
			.status(201)
			.json({ msg: "Workshop created!", workshop: savedWorkshop });
	} catch (err) {
		console.log(err);
		return res.status(500).json({ msg: "Server Error" });
	}
};

exports.getWorkshopInfo = async (req, res) => {
	try {
		const { workshopId } = req.body;
		let workshop;
		if (workshopId === "1") {
			workshop = await Workshop.findOne({ workshopId })
				.populate("registeredUsers", "name email workshop1Id -_id")
				.select(
					"-_id workshopId name description date time registeredUsers"
				);
		} else if (workshopId === "2") {
			workshop = await Workshop.findOne({ workshopId })
				.populate("registeredUsers", "name email workshop2Id -_id")
				.select(
					"-_id workshopId name description date time registeredUsers"
				);
		} else if (workshopId === "3") {
			workshop = await Workshop.findOne({ workshopId })
				.populate("registeredUsers", "name email workshop3Id -_id")
				.select(
					"-_id workshopId name description date time registeredUsers"
				);
		} else if (workshopId === "4") {
			workshop = await Workshop.findOne({ workshopId })
				.populate("registeredUsers", "name email workshop4Id -_id")
				.select(
					"-_id workshopId name description date time registeredUsers"
				);
		}
		return res.json({
			workshop,
			totalRegistrations: workshop.registeredUsers.length,
		});
	} catch (err) {
		console.log(err);
		return res.status(500).json({ msg: "Server Error" });
	}
};
