import React from "react";

const Card = ({ listing, handlePropertySelect }) => {
  return (
    <div className="card">
      {listing.pics ? (
        <img className="card-img-top" src={listing.pics[1]} />
      ) : (
        ""
      )}
      <div className="card-body">
        <h5 className="card-title u-text-md">{listing.address}</h5>
        <h6 className="card-subtitle mb-2 text-muted">
          {listing.city}, {listing.province} {listing.postal_code}
        </h6>
        <p className="card-text u-text-sm">Price: ${listing.price}</p>
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
