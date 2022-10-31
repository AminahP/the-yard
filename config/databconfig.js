// require("dotenv").config();

// const mongoose = require("mongoose");

// const url = process.env.URL;

// const connectDB = async () => {
//   try {
//     await mongoose.connect(url, {
//       useNewUrlParser: true,
//       useUnifiedTopology: true,
//       useCreateIndex: true,
//       useFindAndModify: false,
//     });
//     console.log("connected to mongoDB");
//   } catch (err) {
//     console.error(err.message);
//     process.exit(1);
//   }
// };

// module.exports = connectDB;

const mongoose = require('mongoose');

mongoose.connect(process.env.MONGO_URI);

const db = mongoose.connection;

db.on('connected', () => {
  console.log(`Connected to ${db.name} at ${db.host}:${db.port}`);
});