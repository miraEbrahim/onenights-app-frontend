import React, { Component } from "react";

import ListView from "./ListView";
import Map from './Map';
import { Putney } from './mapData';
import { venues } from '../Venues/venues'
import { mapDarkStyle } from './mapDarkStyle';
import './map-container.css'


class MapContainer extends Component {
    constructor(props) {
        super();
        this.state = {
    venues: venues,
    map:"",
        marker:"",
        markerArray:[]
  }}
  filterMarker = (filteredList) => {
    let listArray = filteredList.map( (object) => object.place_id );
    let markers = this.state.markerArray;
    for (let l = 0; l < markers.length; l++ ){
      if (listArray.includes(markers[l].id) ) {
      markers[l].marker.setVisible(true);
      window.google.maps.event.trigger(markers[l].marker, 'click');
    }
    else {markers[l].marker.setVisible(false);
    }}
  };

  clickedMarker = (name, id) => {
    let marker = this.state.markerArray;
    for ( let m=0; m < marker.length; m++){
      if (marker[m].id === id)
      {
        window.google.maps.event.trigger(marker[m].marker, 'click');
      }
    }
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
          <ListView venues={this.state.venues} clickedMarker={this.clickedMarker} filterMarker={this.filterMarker} />
          
          </div>
          <div className="col-md-8">
          <Map
        id="myMap"
        options={{
          center: Putney,
          styles: mapDarkStyle,
          zoom: 13
        }}
        onMapLoad={map => {
          
          //InfoWindo & Markers
      const  infowindow =  new window.google.maps.InfoWindow({});
      let   marker, i;
      let markerArray = [];
      for (i = 0; i < venues.length; i++) {
          marker = new window.google.maps.Marker({
            position: new window.google.maps.LatLng(venues[i].geometry.location.lat, venues[i].geometry.location.lng),
            icon: {
              path: window.google.maps.SymbolPath.BACKWARD_CLOSED_ARROW,
              scale: 5,
              strokeColor: '#ce255e'
            },
            animation: window.google.maps.Animation.DROP,
            map: map,
            title: this.state.venues[i].name
          });
          window.google.maps.event.addListener(marker, 'click', (function (marker, i) {
            return function () {
              infowindow.setContent(
                `<div tabIndex="0" class="infoWindow">
                    <h4>${venues[i].name}</h4>
                    <p>${venues[i].vicinity}</p>
                    
                  
                  </div>
                `
              );
              infowindow.open(map,marker, marker.setAnimation(window.google.maps.Animation.BOUNCE));//Add the aniamtion when the marker is clicked
              setTimeout(() => {marker.setAnimation(null);}, 400)
            };
          })(marker, i));
          markerArray.push({id: venues[i].place_id, marker: marker});
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
