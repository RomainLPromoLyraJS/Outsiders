import React, { useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
// import Routing from "./RoutingMachine";
import 'leaflet/dist/leaflet.css';

const TripMap = () => {
  const [ mapSettings, setMapSettings ] = useState({
    lat: 57.74,
    lng: 11.94,
    zoom: 13,
  });

  return (
    <div className="map">
      <MapContainer center={[ mapSettings.lat, mapSettings.lng ]} zoom={mapSettings.zoom} style={{height: '50vh'}}>
        <TileLayer
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        >
          {/* <Routing map={mapSettings} /> */}
        </TileLayer>
      </MapContainer>
    </div>
  );
};

export default TripMap;


/**
 * Import React from 'react;
 * import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
 * 
 * routing
 * 
 * 
 * const TripMap = () => {
 * const position = []
 * const position = []
 * 
 * return (
 *  <MapContainer
 *    center={position}
 *    zoom={13}
 *    scrollWheelZoom={false}
 *    style={{height: '90vh'}}
 *   >
 *  <TileLayer
 *    attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
 *    url="https://{s}.title.openstreetmap.org/{z}/{x}/{y}.png"
 *  />
 * 
 * )
 * }
 * 
 *  */ 