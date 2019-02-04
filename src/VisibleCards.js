import React from "react";
import Card from "./Card";
import CardModal from "./CardModal";

class VisibleCards extends React.Component {
  state = {
    text: "",
    modalIsOpen: false,
    listings: [],
    selectedListing: null
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
        this.setState(() => ({ listings }));
      });
  }
  handlePropertySelect = listing => {
    this.setState({ modalIsOpen: true, selectedListing: listing });
  };
  handleClearSelectedOption = () => {
    this.setState(() => ({ modalIsOpen: false }));
  };
  render() {
    return (
      <div className="container">
        <h1 className="header u-margin-top-lg">Available Listings</h1>
        <section className="section results">
          {this.state.listings.map((listing, idx) => {
            return (
              <Card
                key={idx}
                listing={listing}
                handlePropertySelect={this.handlePropertySelect}
              />
            );
          })}
        </section>
        {this.state.selectedListing ? (
          <CardModal
            isOpen={this.state.modalIsOpen}
            handleClearSelectedOption={this.handleClearSelectedOption}
            selectedListing={this.state.selectedListing}
          />
        ) : (
          ""
        )}
      </div>
    );
  }
}

export default VisibleCards;
