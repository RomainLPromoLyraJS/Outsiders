export const CHANGE_AUTH_FIELD = 'CHANGE_AUTH_FIELD';

export const changeAuthField = (value, name) => ({
  type: CHANGE_AUTH_FIELD,
  value,
  name,
});