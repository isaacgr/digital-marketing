const express = require("express");
const exphbs = require("express-handlebars");
const hbs = require("hbs");
const bodyParser = require("body-parser");
const { check, validationResult } = require("express-validator/check");
const { mongoose } = require("./db/mongoose");
const { Listing } = require("./models/listing");

const path = require("path");

const port = process.env.PORT || 3000;
const app = express();

const publicPath = path.join(__dirname, "..", "public");
const views = path.join(__dirname, "..", "public", "views");
const layouts = path.join(__dirname, "..", "public", "views", "layouts");
const partials = path.join(__dirname, "..", "public", "views", "partials");

hbs.registerPartials(partials);

app.use(express.static(publicPath));
app.use(bodyParser.json());

app.set("views", views);
app.set("view engine", "hbs");
app.engine(
  "hbs",
  exphbs({
    defaultLayout: "index",
    extname: ".hbs",
    layoutsDir: layouts,
    partialsDir: partials
  })
);

// GET /
app.get("/", (request, response) => {
  response.render("home");
});

app.post("/api/listing", (request, response) => {
  Listing.create({
    address: request.body.address,
    lot_size: request.body.lot_size,
    pic: request.body.pic,
    lat: request.body.lat,
    long: request.body.long,
    street_classification: request.body.street_classification,
    hwy_dist: request.body.hwy_dist,
    road_dist: request.body.road_dist
  })
    .then(doc => {
      console.log("OK");
      response.status(200).send(doc);
    })
    .catch(error => {
      console.log(error);
      response.status(400).send({ error: error["message"] });
    });
});

// GET /api/temp/all

app.get("/api/listings/all", (request, response) => {
  const limit = request.query.limit
    ? {
        values: {
          $slice: parseInt(request.query.limit)
        }
      }
    : {};
  Listing.find({}, limit)
    .then(doc => {
      response.send(doc);
    })
    .catch(error => {
      response.status(400).send({ error: error["message"] });
    });
});

// GET /listings

app.get("/listings", (request, response) => {
  response.render("listings");
});

app.listen(port, () => {
  console.log(`Server started on ${port}`);
});
