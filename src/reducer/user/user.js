import {extend} from "../../helpers/helpers.js";
import {Authorization} from "../../const.js";

const initialState = {
  authorizationStatus: Authorization.NO_AUTH,
  isValid: true,
  isWrong: false,
  isSigningIn: false,
};

const Actions = {
  REQUIRED_AUTHORIZATION: `REQUIRED_AUTHORIZATION`,
  SET_VALIDITY_STATUS: `SET_VALIDITY_STATUS`,
  SET_IS_WRONG_STATUS: `SET_IS_WRONG_STATUS`,
};

const actionCreator = {
  requiredAuthorization(status) {
    console.log(1111111);
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
      type: Actions.SET_IS_WRONG_STATUS,
      payload: status,
    };
  }
};

const Operation = {
  checkAuth: () => (dispatch, getState, api) => {
    return api.get(`/login`).then(() => {
      dispatch(actionCreator.requiredAuthorization(Authorization.AUTH));
    }).catch((err) => {
      throw err;
    });
  },

  login: (authData) => (dispatch, getState, api) => {
    return api.post(`/login`, {
      email: authData.email,
      password: authData.password,
    }).then(() => {
      dispatch(actionCreator.requiredAuthorization(Authorization.AUTH));
    }).catch((err) => {
      throw err;
    });
  }
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
  }

  return state;
};

export {Actions, actionCreator, reducer, Operation};
