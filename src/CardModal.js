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
      <button
        className="btn btn-primary"
        onClick={props.handleClearSelectedOption}
      >
        Okay
      </button>
    </section>
  </Modal>
);
Modal.setAppElement("body");

export default CardModal;
