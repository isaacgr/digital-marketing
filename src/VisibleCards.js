import React from "react";
import Card from "./Card";

const VisibleCards = props => {
  return props.listings.map((listing, idx) => {
    return (
      <Card
        key={idx}
        listing={listing}
        handlePropertySelect={props.handlePropertySelect}
      />
    );
  });
};

export default VisibleCards;
