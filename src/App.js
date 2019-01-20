import React from "react";
import VisibleCards from "./VisibleCards";
class App extends React.Component {
  state = {
    text: ""
  };
  handleSubmit = () => {
    console.log("Submit");
  };
  handleOnChange = e => {
    const value = e.target.value;
    this.setState(() => ({ text: value }));
  };
  render() {
    return (
      <div>
        <section className="section heading">
          <h1 className="header text-primary">Villabode</h1>
          <p className="heading__description mt-5">
            A website dedicated to helping you find your dream home
          </p>
        </section>
        <div className="container">
          <section className="section search">
            <h1 className="header u-text-lg">Start searching now!</h1>
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
          </section>
        </div>
        <div className="container">
          <section className="section results">
            <VisibleCards />
          </section>
        </div>
      </div>
    );
  }
}

export default App;
