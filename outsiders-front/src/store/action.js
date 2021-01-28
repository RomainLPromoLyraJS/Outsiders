export const CHANGE_AUTH_FIELD = 'CHANGE_AUTH_FIELD';
export const CHANGE_SEARCH_FIELD = 'CHANGE_SEARCH_FIELD';

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