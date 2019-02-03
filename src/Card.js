import React from "react";

const Card = ({ listing, handlePropertySelect }) => {
  return (
    <div className="card">
      {listing.pic ? <img className="card-img-top" src={listing.pic} /> : ""}
      <div className="card-body">
        <h5 className="card-title u-text-md">{listing.address}</h5>
        <p className="card-text u-text-sm">{listing.desc}</p>
        <button
          onClick={() => {
            handlePropertySelect(listing);
          }}
          className="btn btn-primary btn-lg"
        >
          See property
        </button>
      </div>
    </div>
  );
};

export default Card;
