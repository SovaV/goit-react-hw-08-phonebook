const getIsLoggedIn = state => state.auth.isLoggedIn;

const getUsername = state => state.auth.user.name;

const getUseremail = state => state.auth.user.email;

const geISfetchingCurrent = state => state.auth.isFetchingCurrentUser;

const authSelectors = {
  getIsLoggedIn,
  getUsername,
  getUseremail,
  geISfetchingCurrent,
};
export default authSelectors;
