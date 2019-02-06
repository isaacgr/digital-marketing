import React from "react";
import Modal from "react-modal";
import Map from "./Map";

const CardModal = props => (
  <Modal
    isOpen={props.isOpen}
    onRequestClose={props.handleClearSelectedOption}
    closeTimeoutMS={200}
    className="custom-modal"
  >
    <Map
      lat={props.selectedListing.lat}
      long={props.selectedListing.long}
      address={props.selectedListing.address}
    />
    <section className="section modal-options">
      <div
        id="carouselExampleControls"
        className="carousel slide"
        data-ride="carousel"
      >
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img className="d-block" src={props.selectedListing.pics[0]} />
          </div>
          <div className="carousel-item">
            <img className="d-block" src={props.selectedListing.pics[1]} />
          </div>
          <div className="carousel-item">
            <img className="d-block" src={props.selectedListing.pics[2]} />
          </div>

          {/* {props.selectedListing.pics.map((pic, idx) => {
            return (
              <div
                key={pic}
                className={`"carousel-item ${idx === 0 ? "active" : ""}"`}
              >
                <img key={pic} className="d-block" src={pic} />
              </div>
            );
          })} */}
        </div>
        <a
          className="carousel-control-prev"
          href="#carouselExampleControls"
          role="button"
          data-slide="prev"
        >
          <span className="carousel-control-prev-icon" aria-hidden="true" />
          <span className="sr-only">Previous</span>
        </a>
        <a
          className="carousel-control-next"
          href="#carouselExampleControls"
          role="button"
          data-slide="next"
        >
          <span className="carousel-control-next-icon" aria-hidden="true" />
          <span className="sr-only">Next</span>
        </a>
      </div>
      <div className="card__description">
        <h1>
          {props.selectedListing.address}, {props.selectedListing.city}{" "}
          {props.selectedListing.province}{" "}
        </h1>
        <h2>Price: ${props.selectedListing.price}</h2>
        <p>{props.selectedListing.desc}</p>
        <table>
          <tr>
            <th>Ammenities</th>
            <th>Distance From Property</th>
          </tr>
          <tr>
            <td>Distance from schools</td>
            <td>{props.selectedListing.school_drive_time}</td>
          </tr>
          <tr>
            <td>Closest Arterial Road</td>
            <td>{props.selectedListing.road_dist}</td>
          </tr>
          <tr>
            <td>Closest Highway</td>
            <td>{props.selectedListing.hwy_dist}</td>
          </tr>
        </table>
        <div className="card__description__details row">
          <div className="col tile">
            <h5 className="u-text-md">Lot Size</h5>
            <p className="u-text-xs">{props.selectedListing.lot_size}</p>
          </div>
          <div className="col tile">
            <h5 className="u-text-md">Zoning</h5>
            <p className="u-text-xs">{props.selectedListing.zoning}</p>
            <a
              className="tile__link"
              href={props.selectedListing.pdf}
              target="_blank"
            >
              Additional Zoning Information
            </a>
          </div>

          <div className="col tile">
            <h5 className="u-text-md">Front Streets</h5>
            <p className="u-text-xs">{props.selectedListing.front_streets}</p>
          </div>
          <div className="col tile">
            <h5 className="u-text-md">Ward</h5>
            <p className="u-text-xs">{props.selectedListing.ward}</p>
          </div>
          <div className="col tile">
            <h5 className="u-text-md">Classification</h5>
            <p className="u-text-xs">{props.selectedListing.classification}</p>
          </div>
        </div>
      </div>
      <button className="btn btn-success btn-lg u-margin-top-sm modal__button">
        <a
          className="button--link"
          href={props.selectedListing.one_sheet}
          target="_blank"
        >
          Request Further Information
        </a>
      </button>
    </section>
  </Modal>
);
Modal.setAppElement("body");

export default CardModal;
