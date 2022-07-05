const getAuthorization = (state) => state.auth.isAuthenticated;
const getUserName = (state) => state.auth.user.name;
const getError = (state) => state.auth.error;

export {getAuthorization, getUserName, getError};