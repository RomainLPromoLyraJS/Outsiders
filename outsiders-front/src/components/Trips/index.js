import React from 'react';


// import './trips.scss';

import { NavLink } from 'react-router-dom';

import Trip from './Trip.js';



const Trips = ({ trips }) => {
	return (
		<div className='trips_container'>
			{trips.map((trip) => {
				return <NavLink to='/sortie'>
					<Trip key={trip.id} trip={trip} />
				</NavLink>
			})}
		</div>
	);
}


export default Trips;