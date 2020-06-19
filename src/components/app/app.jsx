import React from "react";
import PropTypes from "prop-types";
import Main from "../main/main.jsx";

const App = ({ name, genre, year, onHeaderClickHandler }) => {
  return (
    <Main
      name={name}
      genre={genre}
      year={year}
      onHeaderClickHandler={onHeaderClickHandler}
    />
  );
};

App.propTypes = {
  name: PropTypes.string.isRequired,
  genre: PropTypes.string.isRequired,
  year: PropTypes.number.isRequired,
  onHeaderClickHandler: PropTypes.func.isRequired,
};

export default App;
