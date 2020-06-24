import React from "react";
import PropTypes from "prop-types";
import Main from "../main/main.jsx";

const App = ({name, genre, year, onHeaderClickHandler, films}) => {
  return (
    <Main
      name={name}
      genre={genre}
      year={year}
      onHeaderClickHandler={onHeaderClickHandler}
      films={films}
    />
  );
};

App.propTypes = {
  name: PropTypes.string.isRequired,
  genre: PropTypes.string.isRequired,
  year: PropTypes.number.isRequired,
  onHeaderClickHandler: PropTypes.func.isRequired,
  films: PropTypes.array.isRequired,
};

export default App;
