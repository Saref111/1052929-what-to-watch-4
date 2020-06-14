import React from "react";
import ReactDOM from "react-dom";
import App from "./components/app/app.jsx";

const MOCK_DATA = {
  NAME: `The Grand Budapest Hotel`,
  GENRE: `Drama`,
  YEAR: 2014
};

ReactDOM.render(
    <App name={MOCK_DATA.NAME} genre={MOCK_DATA.GENRE} year={MOCK_DATA.YEAR} />,
    document.querySelector(`#root`)
);
