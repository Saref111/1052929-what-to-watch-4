import {extend} from "../../helpers/helpers.js";

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

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case Actions.REQUIRED_AUTHORIZATION:
      return extend(state, {
        authorizationStatus: action.payload,
      });
  }

  return state;
};

export {Actions, actionCreator, reducer};
