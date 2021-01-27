// == Package imports
import React from 'react';
import { NavLink } from 'react-router-dom';

// == Local imports
// componennts
import Trip from './Trip.js';
// utils
import { buildTripURL } from '../../utils';

const Trips = ({ trips, isLoaded}) => {

	return (
		<div className="trips">

			{/* Display loader */}
			{!isLoaded && (
				<div className="trips__loader" />
			)}

			{/* Display message */}
			{trips.length === 0 && (
				<div className="trips__msg">Aucune sortie disponible</div>
			)}

			{/* Display results */}
			{isLoaded && (
				<div className='trips_container'>
				{trips.map((trip) => {
					return <NavLink key={trip.id_trip} to={buildTripURL(trip.title)}>
						<Trip trip={trip} />
					</NavLink>
				})}
			</div>
			)}
		</div>
	);
}

export default Trips;