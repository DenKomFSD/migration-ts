//if user logged in
export const selectIsLoggedIn = (state) => state.auth.isLoggedIn;
export const selectIsRefreshed = (state) => state.auth.isRefreshing;
//choose user
export const selectUser = (state) => state.auth.user;
