const mongoose = require("mongoose");
const listingSchema = new mongoose.Schema(
  {
    address: { type: String, required: true },
    lot_size: { type: String, required: true },
    pic: { type: String, required: false },
    lat: { type: Number, required: true },
    long: { type: Number, required: true },
    street_classification: { type: String, required: true },
    hwy_dist: { type: Number, required: true },
    road_dist: { type: Number, required: true }
  },
  { versionKey: false }
);

const Listing = mongoose.model("Listing", listingSchema);

module.exports = { Listing };
