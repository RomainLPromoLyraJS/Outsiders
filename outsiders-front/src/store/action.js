export const CHANGE_AUTH_FIELD = 'CHANGE_AUTH_FIELD';
export const CHANGE_SEARCH_FIELD = 'CHANGE_SEARCH_FIELD';
export const GET_SPORTS_SUCCESS = 'GET_SPORTS_SUCCESS';
export const GET_CATEGORIES_SUCCESS = 'GET_CATEGORIES_SUCCESS';
export const SEARCH_SUCCESS = 'SEARCH_SUCCESS';
export const GET_TRIPS_SUCCESS = 'GET_TRIPS_SUCCESS';
export const CHANGE_TRIP_FIELD = 'CHANGE_CREATE_FIELD';
export const CREATE_TRIP_SUCCESS = 'CREATE_TRIP_SUCCESS';
export const PATCH_TRIP_SUCCESS = 'PATCH_TRIP_SUCCESS';

export const changeAuthField = (value, name) => ({
  type: CHANGE_AUTH_FIELD,
  value,
  name,
});

export const changeSearchField = (value, name) => ({
  type: CHANGE_SEARCH_FIELD,
  value,
  name,
});

export const getSportsSuccess = (list) => ({
  type: GET_SPORTS_SUCCESS,
  list,
});

export const getCategoriesSuccess = (categories) => ({
  type: GET_CATEGORIES_SUCCESS,
  categories,
});

export const searchSuccess = (tripList) => ({
  type: SEARCH_SUCCESS,
  tripList,
});

export const getTripsSuccess = (tripList) => ({
  type: GET_TRIPS_SUCCESS,
  tripList,
});

export const changeTripField = (value, name) => ({
  type: CHANGE_TRIP_FIELD,
  value,
  name,
});

export const createTripSuccess = (trips) => ({
  type: CREATE_TRIP_SUCCESS,
  trips,
});

export const patchTripSuccess = (trips) => ({
  type: PATCH_TRIP_SUCCESS,
  trips,
});