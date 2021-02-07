// == Package imports
import React from 'react';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';

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
				{console.log(trips)}
			</div>
			)}
		</div>
	);
}

Trips.propTypes = {
	trips: PropTypes.arrayOf(PropTypes.shape({
		id_trip: PropTypes.number.isRequired,
		date: PropTypes.string.isRequired,
		description: PropTypes.string.isRequired,
		duration: PropTypes.number.isRequired,
		from: PropTypes.string.isRequired,
		minimum: PropTypes.number,
		places: PropTypes.number.isRequired,
		price: PropTypes.number.isRequired,
		time: PropTypes.string.isRequired,
		title: PropTypes.string.isRequired,
		to: PropTypes.string.isRequired,
		sport: PropTypes.arrayOf(PropTypes.shape({
			description: PropTypes.string.isRequired,
			id_sport: PropTypes.number.isRequired,
			title: PropTypes.string.isRequired,
		})),
		user: PropTypes.arrayOf(PropTypes.shape({
			description: PropTypes.string.isRequired,
			email: PropTypes.string.isRequired,
			firstname: PropTypes.string.isRequired,
			id_creator: PropTypes.number.isRequired,
			lastname: PropTypes.string.isRequired,
			username: PropTypes.string.isRequired,
		})),

	}))
}

export default Trips;