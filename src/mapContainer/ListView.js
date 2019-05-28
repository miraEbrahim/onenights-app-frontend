import React, { Component } from "react";

import escapeRegExp from "escape-string-regexp";
import sortBy from "sort-by";

import './ListView.css';

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
            showingVenues = venues.filter(venue => match.test(venue.name));
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
    
            <div className="container ">
              <div className="row">
                {showingVenues.map(venue => (
                  <li key="{venue.place_id}">
                    <div className="card">
                    <img className="card-img-top img-top" src={"http://placehold.it/400x20&text=slide1"} alt="Card cap" />
                      <div className="card-body">
                        <h2 className="card-title  green-text">{venue.name}</h2>
                        <p className=" mt-3 mb-2 grey-text card-text">
                         
                          {venue.vicinity}
                        </p>
                      </div>
                      <ul className="list-group list-group-flush">
                        <li className="list-group-item">{venue.price_level}</li>
                        <li className="list-group-item">{venue.rating}</li>
                        <li className="list-group-item">{venue.user_ratings_total}</li>
                      </ul>
                  
                  
                    
                    <div className="card-body">
                    
                      <a href="{venue.icon}" className="card-link">Card link</a>
                       </div>
                    <div className="card-body">
                    <a href="#" className="btn btn-primary">Go somewhere</a>
                    <a href="#" className="btn btn-secondary">Go somewhere</a>
                    </div></div>
                  </li>
                ))}
              </div>
            </div>
          </div>

        );
    }
}

export default ListView;