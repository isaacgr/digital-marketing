import React from "react";
import Card from "./Card";

class VisibleCards extends React.Component {
  state = {
    listings: []
  };
  componentDidMount() {
    fetch("/api/listings/all", {
      headers: {
        "Content-Type": "application/json"
      }
    })
      .then(response => {
        return response.json();
      })
      .then(listings => {
        console.log(listings);

        this.setState(() => ({ listings }));
      });
  }
  render() {
    return this.state.listings.map((listing, idx) => {
      return <Card key={idx} listing={listing} />;
    });
  }
}

export default VisibleCards;
