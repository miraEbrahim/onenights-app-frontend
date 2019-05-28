import React, { Component } from "react";

import escapeRegExp from "escape-string-regexp";
import sortBy from "sort-by";

class ListView extends Component {
    state = {
        query: ""
    };

    updateQuery = query => {
        this.setState({ query: query.trim() });
    };

    clearQuery = () => {
        this.setState({ query: "" });
    };

    render() {
        const { venues } = this.props;
        const { query } = this.state;

        let showingVenues;
        if (query) {
            const match = new RegExp(escapeRegExp(this.state.query), "i");
            showingVenues = contacts.filter(venue => match.test(venue.name));
        } else {
            showingVenues = venues;
        }

        showingVenues.sort(sortBy("name"));

        return (
            <div className="list-venues">
            <div className="search-bar">
              <div className="input-group mb-3">
                <div className="input-group-prepend">
                  <span className="green-input" id="inputGroup-sizing-default">
                    Search Venues
                  </span>
                </div>
                <input
                  aria-label=""
                  aria-describedby="basic-addon1"
                  className="form-control"
                  type="text"
                  placeholder="by name"
                  value={this.state.query}
                  onChange={event => this.updateQuery(event.target.value)}
                />
              </div>
            </div>
    
            {showingVenues.length !== venues.length && (
              <div className="grey-text">
                <span>
                  Now Showing {showingVenues.length} matching venue names of{" "}
                  {venues.length} total venues
                </span>
                <button className="green-button" onClick={this.clearQuery}>
                  Show All
                </button>
              </div>
            )}
    
            <div className="container">
              <div className="row">
                {showingVenues.map(venue => (
                  <li key="{venue.place_id}">
                    <div className="card">
                      <div className="card-body">
                        <h2 className="card-title mb-2 green-text">{venue.name}</h2>
                        <p className=" mt-3 mb-2 grey-text card-text">
                          {venue.price_level}
                        </p>
                        <p className="card-text mb-2 grey-text">
                          {venue.vicinity}
                        </p>
                      </div>
                    </div>
                  </li>
                ))}
              </div>
            </div>
          </div>

        );
    }
}

export default ListView;