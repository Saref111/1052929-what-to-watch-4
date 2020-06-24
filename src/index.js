import React from "react";
import ReactDOM from "react-dom";
import App from "./components/app/app.jsx";
import FILMS from "./mock/films.js";

const MOCK_DATA = {
  NAME: `The Grand Budapest Hotel`,
  GENRE: `Drama`,
  YEAR: 2014,
  HEADER_CLICK_HANDLER: () => {},
};

ReactDOM.render(
    <App
      name={MOCK_DATA.NAME}
      genre={MOCK_DATA.GENRE}
      year={MOCK_DATA.YEAR}
      onHeaderClickHandler={MOCK_DATA.HEADER_CLICK_HANDLER}
      films={FILMS}
    />,
    document.querySelector(`#root`)
);
