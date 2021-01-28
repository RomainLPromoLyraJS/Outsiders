// Package imports
import axios from 'axios';

// Local imports
import apiUrl from './url';
import { getTripsSuccess, getTripDetailsSuccess, getSportsSuccess, getCategoriesSuccess, searchSuccess } from '../store/action';

// request cat/etc
const auth = (store) => (next) => (action) => {
	// const state

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
						// console.log (response.data.data[0].jsonb_build_object.category);
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
		};

		case 'GET_TRIP_DETAILS': {
			const { auth: { token } } = store.getState();

			const config = {
				method: 'get',
				url: `${apiUrl}/trip/${action.tripId}`,
				headers: {
					'Authorization': `Bearer ${token}`,
				}
			}

			axios(config)
				.then((response) => {
					if (response.status !== 200) {
						throw response.error;
					} else {
						store.dispatch(getTripDetailsSuccess(response.data.data[0], response.data.data[1], response.data.data[2]));
					}
				}).catch((error) => {
					console.log('Oups ! ', error);
				});
			break;
		}

		case 'DELETE_TRIP': {
			const { auth: { token } } = store.getState();
			const { trips: { currentTrip } } = store.getState();

			const config = {
				method: 'delete',
				url: `${apiUrl}/trip/${currentTrip.trip_id}`,
				headers: {
					'Authorization': `Bearer ${token}`,
				}
			}

			axios(config)
				.then((response) => {
					if (response.status !== 200) {
						throw response.error;
					} else {
						store.dispatch({type: 'DELETE_TRIP_SUCCESS'});
					}
				}).catch((error) => {
					console.log('Oups ! ', error);
				});
			break;
		}

		case 'JOIN_TRIP': {
			const { auth: { id, token } } = store.getState();
			const { trips: { currentTrip } } = store.getState();

			const config = {
				method: 'patch',
				url: `${apiUrl}/trip/${currentTrip.trip_id}/user/${id}`,
				headers: {
					'Authorization': `Bearer ${token}`,
				}
			}

			axios(config)
				.then((response) => {
					if (response.status !== 200) {
						throw response.error;
					} else {
						console.log('User joined !');
						// axios({
						// 	method: 'get',
						// 	url: `${apiUrl}/trip/${currentTrip.trip_id}`,
						// 	headers: {
						// 		'Authorization': `Bearer ${token}`,
						// 	}
						// }).then(
						// 	store.dispatch(getTripDetailsSuccess(response.data.data[0], response.data.data[1], response.data.data[2]))
						// )
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