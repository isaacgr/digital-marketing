const mongoose = require("mongoose");
const listingSchema = new mongoose.Schema(
  {
    address: { type: String, required: true },
    city: { type: String, required: true },
    province: { type: String, required: true },
    postal_code: { type: String, required: true },
    desc: { type: String, required: false },
    price: { type: String, required: true },
    school_drive_time: { type: String, required: true },
    front_streets: { type: String, required: true },
    ward: { type: Number, required: true },
    community: { type: String, reqiured: true },
    lot_size: { type: String, required: true },
    zoning: { type: String, required: true },
    nearby: { type: Array, required: false },
    pdf: { type: Array, required: false },
    pics: { type: Array, required: false },
    lat: { type: Number, required: true },
    long: { type: Number, required: true },
    street_classification: { type: String, required: false },
    hwy_dist: { type: String, required: false },
    road_dist: { type: String, required: false }
  },
  { versionKey: false }
);

const Listing = mongoose.model("Listing", listingSchema);

module.exports = { Listing };
