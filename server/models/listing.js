const mongoose = require("mongoose");
const listingSchema = new mongoose.Schema(
  {
    address: { type: String, required: true },
    desc: { type: String, required: true },
    price: { type: String, required: true },
    school_drive_time: { type: String, required: true },
    front_streets: { type: String, required: true },
    ward: { type: Number, required: true },
    community: { type: String, reqiured: true },
    lot_size: { type: String, required: true },
    zoning: { type: String, required: true },
    nearby: { type: Array, required: true },
    pdf: { type: Array, required: false },
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
