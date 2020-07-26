import React from "react";
import ReactDOM from "react-dom";
import {createStore, applyMiddleware} from "redux";
import {reducer} from "./reducer.js";
import {Provider} from "react-redux";
import App from "./components/app/app.jsx";
import thunk from "redux-thunk";
import createApi from "./api.js";
import FILMS from "./mock/films.js";
import app from "./components/app/app.jsx";

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

const api = createApi(() => {});
const store = createStore(reducer, applyMiddleware(thunk.withExtraArgument(api)));

ReactDOM.render(
    <Provider store={store}>
      <App
        promo={MOCK_DATA}
        films={FILMS}
      />
    </Provider>,
    document.querySelector(`#root`)
);
