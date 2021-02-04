import React from "react";

import { withScriptjs } from "react-google-maps";
import Map from "./Map";
// import "./style.css";

const TripMap = ({ from, to }) => {
  const MapLoader = withScriptjs(Map);

  return (
    <div className="map">
      <h2 className="map__title">Le trajet</h2>
      <MapLoader
        from={from}
        to={to}
        googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyBItBIHiK0_b6jh3e-aJQ646_x9ibf60T0"
        loadingElement={<div style={{ height: `100%` }} />}
      />
    </div>
  );
};

export default TripMap;
