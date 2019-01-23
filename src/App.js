import React from "react";
import VisibleCards from "./VisibleCards";
import CardModal from "./CardModal";

class App extends React.Component {
  state = {
    text: "",
    modalIsOpen: false,
    listings: [],
    selectedListing: {}
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
  handleSubmit = () => {
    console.log("Submit");
  };
  handleOnChange = e => {
    const value = e.target.value;
    this.setState(() => ({ text: value }));
  };
  handlePropertySelect = listing => {
    this.setState({ modalIsOpen: true, selectedListing: listing });
  };
  handleClearSelectedOption = () => {
    this.setState(() => ({ modalIsOpen: false }));
  };
  render() {
    return (
      <div>
        <section className="section heading">
          <div className="container">
            <h1 className="header">VillaBode Consulting</h1>
            <p className="heading__description mt-5">
              Our team of experts is dedicated to helping contractors and
              businesses find available lots for future development
            </p>
            <div className="search">
              {/* <h1 className="header u-text-lg">Start searching now!</h1> */}
              <div className="search-bar">
                <input
                  onChange={this.handleOnChange}
                  className="search-bar__input"
                  type="text"
                  placeholder="Search..."
                  name="search"
                />
                <button
                  onClick={this.handleSubmit}
                  type="submit"
                  className="search-bar__button"
                >
                  <i className="fa fa-search" />
                </button>
              </div>
            </div>
          </div>
        </section>

        <div className="container">
          <section className="section results">
            <VisibleCards
              listings={this.state.listings}
              handlePropertySelect={this.handlePropertySelect}
            />
          </section>
        </div>
        <section className="section footer">
          <div className="container">
            <footer>
              VillaBode is an extension of{" "}
              <a href="http://staging.irowell.io" target="_blank">
                InteGRated concepts
              </a>
            </footer>
          </div>
        </section>
        <CardModal
          isOpen={this.state.modalIsOpen}
          handleClearSelectedOption={this.handleClearSelectedOption}
          selectedListing={this.state.selectedListing}
        />
      </div>
    );
  }
}

export default App;
