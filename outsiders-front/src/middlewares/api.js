// Package imports
import axios from 'axios';

// Local imports
import apiUrl from './url';
import { getTripsSuccess, getSportsSuccess, getCategoriesSuccess, searchSuccess, createTripSuccess } from '../store/action';

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
						store.dispatch(searchSuccess(response.data.data));
					}
				}).catch((error) => {
					console.log('Oups ! ', error);
				});
			break;
		}

		case 'HANDLE_CREATE': {
			const {
				trips: { 
					title,
					description,
					date,
					time,
					from,
					to,
					places,
					duration,
					minimum,
					price,
					sport_id,
				},
			 } = store.getState();

			 const { auth: { id }} = store.getState();

			const config = {
				method: 'post',
				url: `${apiUrl}/trip`,
				headers: {
					'Content-Type': 'application/json',
				},
				data: {
					user_id : id,
					title,
					description,
					date,
					time,
					from,
					to,
					places,
					duration,
					minimum,
					price,
					sport_id,
				},
			};
			console.log(config);
			axios(config)
				.then((response) => {
					console.log(response);
					if (response.status !==200) {
						throw response.error;
					} else {
						store.dispatch(createTripSuccess(response.data.data));
						// store.dispatch({type: 'GET_TRIPS'});
						// console.log('NewTrip has been created successfully');
					}
				}).catch((error) => {
					console.log('Oups ! ', error);
				})
				.finally(()=> {
					store.dispatch({type: 'GET_TRIPS'});
					store.dispatch({type: 'CHANGE_LOADING'});
				});
			break;
		}

		default:
			next(action);
	}
};

export default auth;