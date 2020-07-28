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
import {Operation as UserOperation, actionCreator} from "./reducer/user/user.js";
import FILMS from "./mock/films.js";

const MOCK_DATA = {
  id: 20,
  title: `Appleman`,
  src: `http://dummyimage.com/280x175/D76E00&text=`,
  preview: `https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4`,
  details: {
    bgPoster: `http://dummyimage.com/1300/D76E00&text=`,
    cover: `http://dummyimage.com/218x327&text=`,
    genre: `crime`,
    year: 2001,
    rate: 8.8,
    votes: 666,
    time: 99,
    director: `Kevin Smith`,
  },
};

const onUnauthorized = () => {
  store.dispatch(actionCreator.requireAuthorization(Authorization.UN_AUTH));
};

const api = createApi(onUnauthorized);
const store = createStore(
    reducer,
    compose(applyMiddleware(
        thunk.withExtraArgument(api)),
    window.__REDUX_DEVTOOLS_EXTENSION__ ? window.__REDUX_DEVTOOLS_EXTENSION__() : (f) => f)
);

store.dispatch(DataOperation.loadFilms());
store.dispatch(UserOperation.checkAuth());

ReactDOM.render(
    <Provider store={store}>
      <App
        promo={MOCK_DATA}
      />
    </Provider>,
    document.querySelector(`#root`)
);
