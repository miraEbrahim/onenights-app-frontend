import React, { Component } from "react";

import ListView from "./ListView";
import { venues } from './venues'
class MapContainer extends Component {
  state = {
    venues: venues
  }

  
  
  render() {
    return (
      <div className="App">
      <div className="container">
      <div className="row">
        <div className="col-md-12">
          <h1 className="text-capitalize text-center green-text mt-4">
          London's Venues
          </h1>
          <ListView venues={this.state.venues} />
        </div>
      </div>
    </div>
    
  
     
      </div>
    

    );
  }
}
export default MapContainer;
