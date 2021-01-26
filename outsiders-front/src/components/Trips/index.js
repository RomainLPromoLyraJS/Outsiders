import React from 'react';
import { NavLink } from 'react-router-dom';


import Trip from './Trip.js';

//Import Utils
import { buildTripURL } from '../../utils';



const Trips = ({ trips, isLoaded}) => {

	 
	return (
		<>
		{!isLoaded && (
			<div>CHARGEMENT</div>
		)}
		{trips.length === 0 && (
			<div>Aucune sortie disponible</div>
		)}
		{isLoaded && (
			<div className='trips_container'>
			{trips.map((trip) => {
				return <NavLink key={trip.id} to={buildTripURL(trip.title)}>
					<Trip trip={trip} />
				</NavLink>
			})}
		</div>
		)}
		</>
	);
}


export default Trips;