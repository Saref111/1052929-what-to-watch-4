import {extend} from "../../helpers/helpers.js";
import {Authorization} from "../../const.js";

const initialState = {
  authorizationStatus: Authorization.NO_AUTH,
};

const Actions = {
  REQUIRED_AUTHORIZATION: `REQUIRED_AUTHORIZATION`,
};

const actionCreator = {
  requiredAuthorization(status) {
    return {
      type: Actions.REQUIRED_AUTHORIZATION,
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
  }

  return state;
};

export {Actions, actionCreator, reducer, Operation};
