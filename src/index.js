import React from "react";
import ReactDOM from "react-dom";
import {createStore} from "redux";
import {reducer} from "./reducer.js";
import {Provider} from "react-redux";
import App from "./components/app/app.jsx";
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

const store = createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

ReactDOM.render(
    <Provider store={store}>
      <App
        promo={MOCK_DATA}
        films={FILMS}
      />
    </Provider>,
    document.querySelector(`#root`)
);
