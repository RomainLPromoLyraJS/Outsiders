/*global google*/
import React, { useState, useEffect } from 'react';
import {
  withGoogleMap,
  GoogleMap,
  DirectionsRenderer
} from 'react-google-maps';

const Map = ({ from, to }) => {
  const [ directions, setDirections ] = useState();

  // when component is loaded to request the Google Maps API
  useEffect(() => {
    // function that send the request
    const directionsService = new google.maps.DirectionsService();
    /**
     * @param origin (required) specifies the start location from which to calculate directions. This value may be specified as a @String (for example, "Chicago, IL")
     * @param destination (required) specifies the start location from which to calculate directions. This value may be specified as a @String (for example, "Chicago, IL")
     * Sending the request
     * https://developers.google.com/maps/documentation/javascript/directions
     * To use directions in the Maps JavaScript API, create an object of type DirectionsService and call DirectionsService.route() to initiate a request to the Directions service, passing it a DirectionsRequest object literal containing the input terms and a callback method to execute upon receipt of the response.
     */
    directionsService.route(
      {
        origin: from,
        destination: to,
        travelMode: google.maps.TravelMode.DRIVING
      },
      (result, status) => {
        if (status === google.maps.DirectionsStatus.OK) {
          setDirections(result);
          console.log(result);
        } else {
          console.error(`error fetching directions ${result}`);
        }
      }
    );
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const GoogleMapExample = withGoogleMap(props => (
    <GoogleMap
      defaultCenter={{ lat: 47.64375627898157,  lng: 1.9421780093201766 }}
      defaultZoom={5}
    >
      <DirectionsRenderer directions={directions} />
    </GoogleMap>
  ));

  return (
    <div>
      <GoogleMapExample
        containerElement={<div className='mapContainer' />}
        mapElement={<div style={{ height: `100%` }} />}
      />
    </div>
  );
};

export default Map;