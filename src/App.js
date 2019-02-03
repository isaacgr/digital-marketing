import React from "react";

class App extends React.Component {
  handleSubmit = () => {
    console.log("Submit");
    location.href = "/listings";
  };
  handleOnChange = e => {
    const value = e.target.value;
    this.setState(() => ({ text: value }));
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
        <section className="section footer">
          <div className="container">
            <footer>
              VillaBode is an extension of{" "}
              <a href="http://irowell.io" target="_blank">
                InteGRated concepts
              </a>
            </footer>
            <footer>Copyright &copy; Quincey Bailey 2019</footer>
          </div>
        </section>

        {/* <div className="container">
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
 */}
      </div>
    );
  }
}

export default App;
