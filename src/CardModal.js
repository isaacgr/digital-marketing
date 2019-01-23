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
    <Map lat={props.selectedListing.lat} long={props.selectedListing.long} />
    <section className="section modal-options">
      <div
        id="carouselExampleControls"
        class="carousel slide"
        data-ride="carousel"
      >
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img class="d-block w-100" src="..." alt="First slide" />
          </div>
          <div class="carousel-item">
            <img class="d-block w-100" src="..." alt="Second slide" />
          </div>
          <div class="carousel-item">
            <img class="d-block w-100" src="..." alt="Third slide" />
          </div>
        </div>
        <a
          class="carousel-control-prev"
          href="#carouselExampleControls"
          role="button"
          data-slide="prev"
        >
          <span class="carousel-control-prev-icon" aria-hidden="true" />
          <span class="sr-only">Previous</span>
        </a>
        <a
          class="carousel-control-next"
          href="#carouselExampleControls"
          role="button"
          data-slide="next"
        >
          <span class="carousel-control-next-icon" aria-hidden="true" />
          <span class="sr-only">Next</span>
        </a>
      </div>
      <button
        className="btn btn-primary btn-lg"
        onClick={props.handleClearSelectedOption}
      >
        View Property Details
      </button>
    </section>
  </Modal>
);
Modal.setAppElement("body");

export default CardModal;
