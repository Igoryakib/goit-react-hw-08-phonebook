const getAuthorization = (state) => state.auth.isAuthenticated;
const getUserName = (state) => state.auth.user.name;

export {getAuthorization, getUserName};