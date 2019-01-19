const mongoose = require("mongoose");
const env = process.env.NODE_ENV || "development";

if (env === "development") {
  process.env.MONGODB_URI = "mongodb://localhost:27017/Listings";
} else if (env === "test") {
  process.env.MONGODB_URI = "mongodb://localhost:27017/ListingsTest";
}

mongoose.connect(
  process.env.MONGODB_URI,
  error => {
    if (error) {
      throw error;
    }
    console.log("Connected to db");
  }
);

// mongoose.disconnect(() => {
//   mongoose.connection.close(function() {
//     console.log("Mongoose connection disconnected");
//   });
// });

module.exports = { mongoose };
