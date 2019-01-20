import React from "react";

const Card = ({ listing }) => {
  return (
    <div className="card">
      <img className="card-img-top" src={listing.pic} alt="Card image cap" />
      <div className="card-body">
        <h5 className="card-title">{listing.address}</h5>
        <p className="card-text">
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </p>
        <a className="btn btn-primary">See property</a>
      </div>
    </div>
  );
};

export default Card;
