import React from "react";
import ReactDOM from "react-dom";
import {createStore, applyMiddleware, compose} from "redux";
import reducer from "./reducer/reducer.js";
import {Provider} from "react-redux";
import App from "./components/app/app.jsx";
import thunk from "redux-thunk";
import {createApi} from "./api.js";
import {Authorization} from "./const.js";
import {Operation as DataOperation} from "./reducer/data/data.js";
import {Operation as UserOperation, actionCreator as userActionCreator} from "./reducer/user/user.js";

const onUnauthorized = (store) => {
  store.dispatch(userActionCreator.requiredAuthorization(Authorization.NO_AUTH));
  store.dispatch(userActionCreator.setSigningInStatus(true));
};

const api = createApi(() => {
  onUnauthorized(store);
});

const store = createStore(
    reducer,
    compose(applyMiddleware(
        thunk.withExtraArgument(api)),
    window.__REDUX_DEVTOOLS_EXTENSION__ ? window.__REDUX_DEVTOOLS_EXTENSION__() : (f) => f)
);

store.dispatch(DataOperation.loadPromo());
store.dispatch(DataOperation.loadFilms());
store.dispatch(UserOperation.checkAuth());

ReactDOM.render(
    <Provider store={store}>
      <App/>
    </Provider>,
    document.querySelector(`#root`)
);
