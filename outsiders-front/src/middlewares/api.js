// == Package imports == \\
import axios from 'axios';

// == Local imports == \\
import apiUrl from './url';
import { getTripsSuccess, getTripDetailsSuccess, getSportsSuccess, getCategoriesSuccess, searchSuccess } from '../store/action';

// request cat/etc
const auth = (store) => (next) => (action) => {


	switch (action.type) {

		case 'GET_SPORTS': {
			axios.get(`${apiUrl}/sport`)
				.then((response) => {
					if (response.status !== 200) {
						throw response.error;
					} else {
						store.dispatch(getSportsSuccess(response.data.data));
					}
				}).catch((error) => {
					console.log('Oups ! ', error);
				});
			break;
		}
		
		case 'GET_CATEGORIES': {
			axios.get(`${apiUrl}/category`)
				.then((response) => {
					if (response.status !== 200) {
						throw response.error;
					} else {
						store.dispatch(getCategoriesSuccess(response.data.data[0].jsonb_build_object.category));
					}
				}).catch((error) => {
					console.log('Oups ! ', error);
				});
			break;
		}

		case 'GET_TRIPS': {
			axios.get(`${apiUrl}/trip`)
				.then((response) => {
					if (response.status !== 200) {
						throw response.error;
					} else {
						store.dispatch(getTripsSuccess(response.data.data));
					}
				}).catch((error) => {
					console.log('Oups !', error);
				});
				break;
		}

		case 'HANDLE_SEARCH': {
			const { search: { sport, from, date }} = store.getState();
			
			const config = {
				method: 'post',
				url: `${apiUrl}/searchTrips`,
				headers: {
					'Content-Type': 'application/json',
				},
				data: {
					sport,
					from,
					date,
				},
			};

			axios(config)
				.then((response) => {
					if (response.status !== 200) {
						throw response.error;
					} else {

						if (response.data.data === null) {
							store.dispatch(searchSuccess([]));
						}
						else {
							store.dispatch(searchSuccess(response.data.data));
						}
					}
				}).catch((error) => {
					console.log('Oups ! ', error);
				});
			break;
		}

		case 'CREATE_TRIP': {
			const {
				trips: { currentTrip }
					// : {
					// trip_title,
					// trip_description,
					// date,
					// time,
					// from,
					// to,
					// places,
					// minimum,
					// price,
					// duration,
					// sport_id,
				// }	},
			 } = store.getState();

			 const { auth: { id }} = store.getState();

			const config = {
				method: 'post',
				url: `${apiUrl}/trip`,
				headers: {
					'Content-Type': 'application/json',
				},
				data: {
					trip_title : currentTrip.trip_title,
					// trip_description,
					// date,
					// time,
					// from,
					// to,
					// places,
					// minimum,
					// price,
					// duration,
					// sport_id,
					user_id: id,
				},
			};
			console.log(currentTrip);
			axios(config)
				.then((response) => {
					console.log(response);
					if (response.status !==200) {
						throw response.error;
					} else {
						// store.dispatch(createTripSuccess(response.data.data));
						console.log(response);
					}
				}).catch((error) => {
					console.log('Oups ! ', error);
				// })
				// .finally(()=> {
				// 	store.dispatch({type: 'GET_TRIPS'});
				// 	store.dispatch({type: 'CHANGE_LOADING' });
				});
			break;
		}

		// case 'HANDLE_MODIFY': {
		// 	const {
		// 		trips: {
		// 			title,
		// 			description,
		// 			date,
		// 			time,
		// 			from,
		// 			to,
		// 			places,
		// 			duration,
		// 			minimum,
		// 			price,
		// 			sport_id,
		// 			trip_id,
		// 		}
		// 	} = store.getState();

		// 	const config = {
		// 		method: 'patch',
		// 		url: `${apiUrl}/trip/${trip_id}`,
		// 		headers: {
		// 			'Content-type': 'application/json',
		// 		},
		// 		data: {
		// 			title,
		// 			description,
		// 			date,
		// 			time,
		// 			from,
		// 			to,
		// 			places,
		// 			duration,
		// 			minimum,
		// 			price,
		// 			sport_id,
		// 		},
		// 	};
		// 	axios(config)
		// 		.then((response) => {
		// 			console.log(response);
		// 			if (response.status !==200) {
		// 				throw response.error;
		// 			} else {
		// 				store.dispatch(patchTripSuccess(response.data.data));
		// 			}
		// 		}).catch((error) => {
		// 			console.log('Oups !', error);
		// 		})
		// 		.finally(() => {
		// 			store.dispatch({type: 'GET_TRIPS' });
		// 			store.dispatch({type: 'CHANGE_LOADING' });
		// 		})
		// 		;
		// 		break;
		// }

		// case 'DELETE_TRIP': {
		// 	const { trips: trip_id } = store.getState();

		// 	const config = {
		// 		method: 'delete',
		// 		url: `${apiUrl}/trip/${trip_id}`,
		// 		headers: {	},
		// 	};
		// 	axios(config)
		// 		.then((response) => {
		// 			if (response.status !==200) {
		// 				throw response.error;
		// 			} else {
		// 				store.dispatch(deleteTripSuccess(response.data.data));
		// 			}
		// 		}).catch((error) => {
		// 			console.log('Oups !', error);
		// 		})
		// 		.finally(() => {
		// 			store.dispatch({type: 'GET_TRIPS' });
		// 			store.dispatch({type: 'CHANGE_LOADING' });
		// 		});
		// 		break;
	// }

		case 'GET_TRIP_DETAILS': {
			axios.get(`${apiUrl}/trip/${action.tripId}`)
				.then((response) => {
					if (response.status !== 200) {
						throw response.error;
					} else {
						store.dispatch(getTripDetailsSuccess(response.data.data[0], response.data.data[1], response.data.data[2]))
						// console.log(response.data.data[0], response.data.data[1], response.data.data[2]);
					}
				}).catch((error) => {
					console.log('Oups ! ', error);
				});
			break;
		}

		default:
			next(action);
	}
};

export default auth;