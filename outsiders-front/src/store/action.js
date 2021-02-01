// == Types
// auth types
export const CHANGE_AUTH_FIELD = 'CHANGE_AUTH_FIELD';
export const SIGNUP_SUCCESS = 'SIGNUP_SUCCESS';
export const EDIT_USER_SUCCES = 'EDIT_USER_SUCCES';

// search types
export const CHANGE_SEARCH_FIELD = 'CHANGE_SEARCH_FIELD';
export const SEARCH_SUCCESS = 'SEARCH_SUCCESS';

// sport and category types
export const GET_SPORTS_SUCCESS = 'GET_SPORTS_SUCCESS';
export const GET_SPORT_TITLE = 'GET_SPORT_TITLE';
export const GET_CATEGORIES_SUCCESS = 'GET_CATEGORIES_SUCCESS';

// trip types
export const CHANGE_TRIP_FIELD = 'CHANGE_TRIP_FIELD';
export const CHANGE_ADMIN_FIELD = 'CHANGE_ADMIN_FIELD';
export const GET_TRIPS_SUCCESS = 'GET_TRIPS_SUCCESS';
export const GET_TRIP_DETAILS_SUCCESS = 'GET_TRIP_DETAILS_SUCCESS';

// message types
export const CHANGE_MESSAGE_FIELD = 'CHANGE_MESSAGE_FIELD';
export const NEW_MESSAGE_SUCCESS = 'NEW_MESSAGE_SUCCESS';


// == Actions
// auth actions
export const CREATE_SPORT_SUCCESS = 'CREATE_SPORT_SUCCESS';
export const GET_USERS_SUCCESS = 'GET_USERS_SUCCESS';


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

// search actions
export const changeSearchField = (value, name) => ({
  type: CHANGE_SEARCH_FIELD,
  value,
  name,
});

export const searchSuccess = (tripList) => ({
  type: SEARCH_SUCCESS,
  tripList,
});

// sport and category actions
export const getSportsSuccess = (list) => ({
  type: GET_SPORTS_SUCCESS,
  list,
});

export const changeSportField = (title) => ({
  type: GET_SPORT_TITLE,
  title,
});

export const getCategoriesSuccess = (categories) => ({
  type: GET_CATEGORIES_SUCCESS,
  categories,
});

// trip actions
export const changeTripField = (value, name) => ({
  type: CHANGE_TRIP_FIELD,
  value,
  name,
});

export const changeAdminField = (value, name) => ({
  type: CHANGE_ADMIN_FIELD,
  value,
  name,
});

export const getTripsSuccess = (tripList) => ({
  type: GET_TRIPS_SUCCESS,
  tripList,
});

export const getTripDetailsSuccess = (details, participant, messages) => ({
  type: GET_TRIP_DETAILS_SUCCESS,
  trip: {
    ...details,
    ...participant,
    ...messages,
  }
});

// message actions
export const changeMessageField = (value) => ({
  type: CHANGE_MESSAGE_FIELD,
  value,
});

export const newMessageSuccess = (messages) => ({
  type: NEW_MESSAGE_SUCCESS,
  messages,
});

export const createSportSuccess = () => ({
  type: CREATE_SPORT_SUCCESS,
});

export const getUsersSuccess = (userList) => ({
  type: GET_USERS_SUCCESS,
  userList,
})
