// == Package imports
import React from 'react';
import { NavLink } from 'react-router-dom';

// == Local imports
// componennts
import Trip from './Trip.js';
import Loader from '../Loader';
// utils
import { buildTripURL } from '../../utils';

const Trips = ({ trips, isLoaded, getTripDetails }) => {

	return (
		<div className="trips">

			{/* Display loader */}
			{!isLoaded && (
				<Loader />
			)}

			{/* Display message */}
			{trips.length === 0 && (
				<div className="trips__msg">Aucune sortie disponible</div>
			)}

			{/* Display results */}
			{isLoaded && (
				<div className='trips_container'>
				{trips.map((trip) => {
					return <NavLink onClick={() => {
						getTripDetails(trip.id_trip);
					}} key={trip.id_trip} to={buildTripURL(trip.title)}>
						<Trip trip={trip} />
					</NavLink>
				})}
			</div>
			)}
		</div>
	);
}

export default Trips;