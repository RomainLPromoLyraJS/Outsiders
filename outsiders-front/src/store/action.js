export const CHANGE_AUTH_FIELD = 'CHANGE_AUTH_FIELD';
export const SIGNUP_SUCCESS = 'SIGNUP_SUCCESS';
export const EDIT_USER_SUCCES = 'EDIT_USER_SUCCES';
export const CHANGE_SEARCH_FIELD = 'CHANGE_SEARCH_FIELD';
export const GET_SPORTS_SUCCESS = 'GET_SPORTS_SUCCESS';
export const GET_CATEGORIES_SUCCESS = 'GET_CATEGORIES_SUCCESS';
export const SEARCH_SUCCESS = 'SEARCH_SUCCESS';
export const GET_TRIPS_SUCCESS = 'GET_TRIPS_SUCCESS';
export const GET_SPORT_TITLE = 'GET_SPORT_TITLE';

export const changeAuthField = (value, name) => ({
  type: CHANGE_AUTH_FIELD,
  value,
  name,
});

export const signupSuccess = (user) => ({
  type: SIGNUP_SUCCESS,
  ...user,
});

export const editUserSuccess = (user) => ({
  type: EDIT_USER_SUCCES,
  ...user,
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
})

export const changeSportField = (title) => ({
  type: GET_SPORT_TITLE,
  title,
})