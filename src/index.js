import React from "react";
import ReactDOM from "react-dom";
import {createStore} from "redux";
import {reducer} from "./reducer.js";
import {Provider} from "react-redux";
import App from "./components/app/app.jsx";
import FILMS from "./mock/films.js";

const MOCK_DATA = {
  NAME: `The Grand Budapest Hotel`,
  GENRE: `Drama`,
  YEAR: 2014,
};

const store = createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

ReactDOM.render(
    <Provider store={store}>
      <App
        name={MOCK_DATA.NAME}
        genre={MOCK_DATA.GENRE}
        year={MOCK_DATA.YEAR}
        films={FILMS}
      />
    </Provider>,
    document.querySelector(`#root`)
);
