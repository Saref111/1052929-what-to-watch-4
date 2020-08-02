import NameSpace from "../name-space.js";

export const getAuthorizationStatus = (state) => {
  return state[NameSpace.USER].authorizationStatus;
};

export const getValidityStatus = (state) => {
  return state[NameSpace.USER].isValid;
};

export const getIsWrongStatus = (state) => {
  return state[NameSpace.USER].isWrong;
};

export const getSigningInStatus = (state) => {
  return state[NameSpace.USER].isSigningIn;
};

export const getUserData = (state) => {
  return state[NameSpace.USER].userData;
};

