import React from "react";

const Card = ({ listing, handlePropertySelect }) => {
  return (
    <div className="card">
      {listing.pic ? <img className="card-img-top" src={listing.pic} /> : ""}
      <div className="card-body">
        <h5 className="card-title">{listing.address}</h5>
        <p className="card-text">
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </p>
        <button
          onClick={() => {
            handlePropertySelect(listing);
          }}
          className="btn btn-primary"
        >
          See property
        </button>
      </div>
    </div>
  );
};

export default Card;
