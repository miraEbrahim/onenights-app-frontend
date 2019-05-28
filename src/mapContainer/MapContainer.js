import React, { Component } from "react";
import { render } from 'react-dom';

import ListView from "./ListView";
import Map from './Map';
import { Putney } from './mapData';
import { mapDarkStyle } from './mapDarkStyle'
import { venues } from './venues'
import './map-container.css'
class MapContainer extends Component {
  state = {
    venues: venues
  }

  
  
  render() {
    return (
      <div className="App">
      <div className="container">
      <div className="row">
        <div className="col-md-4 ">
          <h1 className="text-capitalize text-center green-text mt-4">
          London's Venues
          </h1>
          <ListView venues={this.state.venues} />
          
          </div>
          <div className="col-md-8">
          <Map
        id="myMap"
        options={{
          center: Putney,
          zoom: 13
        }}
        onMapLoad={map => {
          
          //InfoWindo & Markers
      const  infowindow =  new window.google.maps.InfoWindow({});
      let   marker, count;
      let markerArray = [];
      for (count = 0; count < venues.length; count++) {
          marker = new window.google.maps.Marker({
            position: new window.google.maps.LatLng(venues[count].geometry.location.lat, venues[count].geometry.location.lng),
            icon: {
              path: window.google.maps.SymbolPath.BACKWARD_CLOSED_ARROW,
              scale: 5,
              strokeColor: '#ce255e'
            },
            animation: window.google.maps.Animation.DROP,
            map: map,
            title: this.state.venues[count].name
          });
          window.google.maps.event.addListener(marker, 'click', (function (marker, count) {
            return function () {
              infowindow.setContent(
                `<div tabIndex="0" class="infoWindow">
                    <h4>${venues[count].name}</h4>
                    <p>${venues[count].vicinity}</p>
                    
                  
                  </div>
                `
              );
              infowindow.open(map,marker, marker.setAnimation(window.google.maps.Animation.BOUNCE));//Add the aniamtion when the marker is clicked
              setTimeout(() => {marker.setAnimation(null);}, 400)
            };
          })(marker, count));
          markerArray.push({id: venues[count].place_id, marker: marker});
        };
        this.setState({markerArray: markerArray});
        }}
      />
      
        </div>
      </div>
    </div>
    
  
     
      </div>
    

    );
  }
}
export default MapContainer;
