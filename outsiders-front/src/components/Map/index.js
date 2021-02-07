// == Package imports
import React from "react";
import PropTypes from 'prop-types';
import { withScriptjs } from "react-google-maps";
// == Local imports
import Map from "./Map";
import { googleKey } from '../../middlewares/url';


const TripMap = ({ from, to }) => {
  const MapLoader = withScriptjs(Map);

  return (
    <div className='map'>
      <h2 className='map__title'>Le trajet</h2>
      <MapLoader
        from={from}
        to={to}
        googleMapURL={`https://maps.googleapis.com/maps/api/js?key=${googleKey}`}
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
