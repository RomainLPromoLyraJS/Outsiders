export const CHANGE_AUTH_FIELD = 'CHANGE_AUTH_FIELD';
export const CHANGE_SEARCH_FIELD = 'CHANGE_SEARCH_FIELD';
export const GET_SPORTS_SUCCESS = 'GET_SPORTS_SUCCESS';
export const GET_CATEGORIES_SUCCESS = 'GET_CATEGORIES_SUCCESS';
export const SEARCH_SUCCESS = 'SEARCH_SUCCESS';

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