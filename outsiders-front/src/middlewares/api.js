// == Package imports == \\
import axios from 'axios';

// == Local imports == \\
import { apiUrl, weatherKey } from './url';
import {
	getTripsSuccess,
	getTripDetailsSuccess,
	getSportsSuccess,
	getCategoriesSuccess,
	newMessageSuccess,
  getUsersSuccess,
	searchSuccess,
	loadWeatherSuccess,
} from '../store/action';

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

		case 'GET_USER_TRIPS': {
			const { auth: { id, token } } = store.getState();

			const config = {
				method: 'get',
				url: `${apiUrl}/user/${id}`,
				headers: {
					'Content-Type': 'application/json',
					'Authorization': `Bearer ${token}`
				},
			}

			axios(config)
				.then((response) => {
					if (response.status !== 200) {
						throw response.error
					} else {
						store.dispatch(getTripsSuccess(response.data.tripRegistered));
					}
				}).catch((error) => {
					console.log('Oups !', error);
				});
			break;
		};

		case 'GET_USERS': {

			const { auth: { token } } = store.getState();

			const config = {
				method: 'get',
				url: `${apiUrl}/user`,
				headers: {
					'Content-Type': 'application/json',
					'Authorization': `Bearer ${token}`
				},
			};
			
			axios(config)
				.then((response) => {
					if (response.status !== 200) {
						throw response.error;
					} else {
						store.dispatch(getUsersSuccess(response.data.data));
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
			const { trips: { currentTrip } } = store.getState();
			const { auth: { id, token }} = store.getState();

			const config = {
				method: 'post',
				url: `${apiUrl}/trip`,
				headers: {
					'Content-Type': 'application/json',
					'Authorization': `Bearer ${token}`,
				},
				data: {
					title : currentTrip.trip_title,
					description: currentTrip.trip_description,
					date: currentTrip.date,
					time: currentTrip.time,
					from: currentTrip.from,
					to: currentTrip.to,
					places: currentTrip.places,
					minimum: currentTrip.minimum,
					price: currentTrip.price,
					duration: currentTrip.duration,
					sport_id: currentTrip.sport_id,
					user_id: id,
				},
			};
			axios(config)
				.then((response) => {
					if (response.status !==200) {
						throw response.error;
					} else {
						// Send another request with response data.id to get all details from the new trip
						console.log(response.data.message);
						axios({
							method: 'get',
							url: `${apiUrl}/trip/${response.data.data.id}`,
							headers: {
								'Authorization': `Bearer ${token}`,
							}
						}).then((res) => {
							if (res.status !== 200) {
								throw res.error;
							} else {
								// Render all details from the new trip
								store.dispatch(getTripDetailsSuccess(res.data.data[0], res.data.data[1], res.data.data[2]));
								axios({
									method: 'get',
									url: `https://api.openweathermap.org/data/2.5/forecast?q=${res.data.data[0].to}&units=metric&APPID=${weatherKey}`,
									headers: {
										'Content-Type': 'application/json',
									}
								}).then((r) => {
									if (r.status !== 200) {
										throw r.error;
									} else {
										store.dispatch(loadWeatherSuccess(r.data));
									}
								});
							}
						});
					}
				}).catch((error) => {
					console.log('Oups ! ', error);
				});
			break;
		}

		case 'GET_TRIP_DETAILS': {
			const { auth: { token } } = store.getState();

			const config = {
				method: 'get',
				url: `${apiUrl}/trip/${action.tripId}`,
				headers: {
					'Content-Type': 'application/json',
					'Authorization': `Bearer ${token}`,
				}
			}

			axios(config)
				.then((response) => {
					if (response.status !== 200) {
						throw response.error;
					} else {
						store.dispatch(getTripDetailsSuccess(response.data.data[0], response.data.data[1], response.data.data[2]));
						axios({
							method: 'get',
							url: `https://api.openweathermap.org/data/2.5/forecast?q=${response.data.data[0].to}&units=metric&APPID=${weatherKey}`,
							headers: {
								'Content-Type': 'application/json',
							}
						}).then((res) => {
							if (res.status !== 200) {
								throw res.error;
							} else {
								store.dispatch(loadWeatherSuccess(res.data));
							}
						});
					}
				}).catch((error) => {
					console.log('Oups ! ', error);
			 });
		 break;
	 };

		case 'HANDLE_MODIFY': {
			const { trips: { currentTrip } } = store.getState();
			const { auth: { id, token }} = store.getState();
			
			const config = { 
				method: 'patch',
				url: `${apiUrl}/trip/${currentTrip.trip_id}`,
				headers: {
					'Content-type': 'application/json',
					'Authorization': `Bearer ${token}`,
				},
				data: {
					title : currentTrip.trip_title,
					description: currentTrip.trip_description,
					date: currentTrip.date,
					time: currentTrip.time,
					from: currentTrip.from,
					to: currentTrip.to,
					places: currentTrip.places,
					minimum: currentTrip.minimum,
					price: currentTrip.price,
					duration: currentTrip.duration,
					sport_id: currentTrip.sport_id,
					user_id: id,
				},
			};
			axios(config)
				.then((response) => {
					if (response.status !==200) {
						throw response.error;
					} else {
						console.log(response.data.message);
						axios({
							method: 'get',
							url: `${apiUrl}/trip/${response.data.data[0].id}`,
							headers: {
								'Authorization': `Bearer ${token}`,
							}
						}).then((res) => {
							if (res.status !== 200) {
								throw res.error;
							} else {
								// Render all details from the new trip
								store.dispatch(getTripDetailsSuccess(res.data.data[0], res.data.data[1], res.data.data[2]));
								axios({
									method: 'get',
									url: `https://api.openweathermap.org/data/2.5/forecast?q=${res.data.data[0].to}&units=metric&APPID=${weatherKey}`,
									headers: {
										'Content-Type': 'application/json',
									}
								}).then((r) => {
									if (r.status !== 200) {
										throw r.error;
									} else {
										store.dispatch(loadWeatherSuccess(r.data));
									}
								});
							}
						});
					}
				}).catch((error) => {
					console.log('Oups !', error);
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
					'Content-Type': 'application/json',
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
				method: 'post',
				url: `${apiUrl}/trip/${currentTrip.trip_id}/user/${id}`,
				headers: {
					'Content-Type': 'application/json',
					'Authorization': `Bearer ${token}`,
				}
			}

			axios(config)
				.then((response) => {
					if (response.status !== 200) {
						throw response.error;
					} else {
						console.log(response.data.message);
						axios({
							method: 'get',
							url: `${apiUrl}/trip/${currentTrip.trip_id}`,
							headers: {
								'Authorization': `Bearer ${token}`,
							}
						}).then((res) => {
							if (res.status !== 200) {
								throw res.error;
							} else {
								store.dispatch(getTripDetailsSuccess(res.data.data[0], res.data.data[1], res.data.data[2]));
							}
						});
					}
				}).catch((error) => {
					console.log('Oups ! ', error);
				})
			break;
		}

		case 'LEAVE_TRIP': {
			const { auth: { id, token } } = store.getState();
			const { trips: { currentTrip } } = store.getState();

			const config = {
				method: 'delete',
				url: `${apiUrl}/trip/${currentTrip.trip_id}/user/${id}`,
				headers: {
					'Content-Type': 'application/json',
					'Authorization': `Bearer ${token}`,
				}
			}

			axios(config)
				.then((response) => {
					if (response.status !== 200) {
						throw response.error;
					} else {
						console.log(response.data.message);
						axios({
							method: 'get',
							url: `${apiUrl}/trip/${currentTrip.trip_id}`,
							headers: {
								'Authorization': `Bearer ${token}`,
							}
						}).then((res) => {
							if (res.status !== 200) {
								throw res.error;
							} else {
								store.dispatch(getTripDetailsSuccess(res.data.data[0], res.data.data[1], res.data.data[2]));
							}
						});
					}
				}).catch((error) => {
					console.log('Oups ! ', error);
				})
			break;
		};

		case 'NEW_MESSAGE': {
			const { auth: { id, token } } = store.getState();
			const { trips: { messageValue, currentTrip } } = store.getState();

			const config = {
				method: 'post',
				url: `${apiUrl}/trip/${currentTrip.trip_id}/comment`,
				headers: {
					'Content-Type': 'application/json',
					'Authorization': `Bearer ${token}`,
				},
				data: {
					title: 'Nouveau message',
					content: messageValue,
					user_id: id,
					trip_id: currentTrip.trip_id,
				},
			};

			axios(config)
				.then(res => {
					if (res.status !== 200) {
						throw res.error;
					} else {
						console.log(res.data.message);
						store.dispatch(newMessageSuccess(res.data.data));
					}
				}).catch(error => {
					console.log('Oups ! ', error);
				});
			break;
		};

		case 'GET_MESSAGES': {
			const { auth: { token } } = store.getState();
			const { trips: { currentTrip } } = store.getState();
			
			const config = {
				method: 'get',
				url: `${apiUrl}/trip/${currentTrip.trip_id}/comment`,
				headers: {
					'Content-Type': 'application/json',
					'Authorization': `Bearer ${token}`,
				}
			}
			console.log('CONFIG GET MESSAGES', config);
			axios(config)
				.then((response) => {
					if (response.status !== 200) {
						throw response.error;
					} else {
						console.log('RESPONSE GET MESSAGES', response.data.data)
						store.dispatch(newMessageSuccess(response.data.data));
					}
				})
				.catch((error) => {
					console.log('Oups !', error);
				})
				break;
		}

		default:
			next(action);
	}
};

export default auth;