const mongoose = require("mongoose");
module.exports = () => {
	const connectionParams = {
		useNewUrlParser: true,
		useUnifiedTopology: true,
	};
	try {
		mongoose.connect(process.env.DB, connectionParams);
		console.log("Connected to database successfully");
	} catch (error) {
		console.log(error);
		console.log("Could not connect database!");
	}
};

//devins way

// const mongoose = require('mongoose');

// mongoose.connect(process.env.MONGO_URI);

// const db = mongoose.connection;

// db.on('connected', () => {
//   console.log(`Connected to ${db.name} at ${db.host}:${db.port}`);
// });