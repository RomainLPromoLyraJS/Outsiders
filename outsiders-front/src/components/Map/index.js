// == Package imports
import React from "react";
import PropTypes from 'prop-types';
import { withScriptjs } from "react-google-maps";
// == Local imports
import Map from "./Map";

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

TripMap.propTypes = {
  from: PropTypes.string.isRequired,
  to: PropTypes.string.isRequired,
}

export default TripMap;
