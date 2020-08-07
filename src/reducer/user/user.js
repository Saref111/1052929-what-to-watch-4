import {extend} from "@helpers/helpers.js";
import {Authorization} from "../../const.js";
import {userDataAdapter} from "./adapters.js";

const initialState = {
  authorizationStatus: Authorization.NO_AUTH,
  isValid: true,
  isWrong: false,
  isSigningIn: false,
  userData: {},
};

const Actions = {
  REQUIRED_AUTHORIZATION: `REQUIRED_AUTHORIZATION`,
  SET_VALIDITY_STATUS: `SET_VALIDITY_STATUS`,
  SET_IS_WRONG_STATUS: `SET_IS_WRONG_STATUS`,
  SET_IS_SIGNING_IN_STATUS: `SET_IS_SIGNING_IN_STATUS`,
  SET_USER_DATA: `SET_USER_DATA`,
};

const actionCreator = {
  requiredAuthorization(status) {
    return {
      type: Actions.REQUIRED_AUTHORIZATION,
      payload: status,
    };
  },
  setValidityStatus(status) {
    return {
      type: Actions.SET_VALIDITY_STATUS,
      payload: status,
    };
  },
  setIsWrongStatus(status) {
    return {
      type: Actions.SET_IS_WRONG_STATUS,
      payload: status,
    };
  },
  setSigningInStatus(status) {
    return {
      type: Actions.SET_IS_SIGNING_IN_STATUS,
      payload: status,
    };
  },
  setUserData(data) {
    return {
      type: Actions.SET_USER_DATA,
      payload: userDataAdapter(data),
    };
  },
};

const Operation = {
  checkAuth: () => (dispatch, getState, api) => {
    return api.get(`/login`).then((res) => {
      dispatch(actionCreator.setUserData(res.data ? res.data : {}));
      dispatch(actionCreator.requiredAuthorization(res.data ? Authorization.AUTH : Authorization.NO_AUTH));
    }).catch((err) => err);
  },

  login: (authData) => (dispatch, getState, api) => {
    return api.post(`/login`, {
      email: authData.email,
      password: authData.password,
    }).then((data) => {
      dispatch(actionCreator.requiredAuthorization(Authorization.AUTH));
      dispatch(actionCreator.setUserData(data));
      dispatch(actionCreator.setSigningInStatus(false));
    }).catch((err) => {
      throw err;
    });
  },

  sendReview: (data, id) => (dispatch, getState, api) => {
    return api.post(`/comments/${id}`, data).then(() => {
      // console.log(resp);
    });
  },
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case Actions.REQUIRED_AUTHORIZATION:
      return extend(state, {
        authorizationStatus: action.payload,
      });
    case Actions.SET_VALIDITY_STATUS:
      return extend(state, {
        isValid: action.payload,
      });
    case Actions.SET_IS_WRONG_STATUS:
      return extend(state, {
        isWrong: action.payload,
      });
    case Actions.SET_IS_SIGNING_IN_STATUS:
      return extend(state, {
        isSigningIn: action.payload,
      });
    case Actions.SET_USER_DATA:
      return extend(state, {
        userData: action.payload,
      });
  }

  return state;
};

export {Actions, actionCreator, reducer, Operation};
