export const getIsLoggedIn = state => state.auth.isLogin;
export const getToken = state => state.auth.token;
export const getEmail = state => state.auth.user?.email;
