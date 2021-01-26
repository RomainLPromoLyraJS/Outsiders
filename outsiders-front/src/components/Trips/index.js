import React from 'react';
import { NavLink } from 'react-router-dom';


import Trip from './Trip.js';

//Import Utils
import { buildTripURL } from '../../utils';



const Trips = ({ trips, loadTripsData, loadTrips, isLoaded}) => {
	// if (loadTrips) {
	// 	loadTripsData();
	// }
	// useEffect(() => {
  //   loadTripsData();
  // // eslint-disable-next-line react-hooks/exhaustive-deps
	// }, []);
	
	// if (trips.length === 0) {
	// 	loadTripsData();
	// 	return (
	// 		trips
	// 	);
	// }
	


	return (
		<>
		{!isLoaded && (
			<div>CHARGEMENT</div>
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
		
		{/* <div>test</div> */}
		
		</>
	);
}


export default Trips;