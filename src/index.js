import React from "react";
import ReactDOM from "react-dom";
import App from "./components/app/app.jsx";

ReactDOM.render(
    <App name={`The Grand Budapest Hotel`} genre={`Drama`} year={`2014`} />,
    document.querySelector(`#root`)
);
