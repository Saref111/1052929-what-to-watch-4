import React from "react";
import PropTypes from "prop-types";
import Main from "../main/main.jsx";

const App = ({name, genre, year, headerClickHandler}) => {
  return (
    <Main
      name={name}
      genre={genre}
      year={year}
      headerClickHandler={headerClickHandler}
    />
  );
};

App.propTypes = {
  name: PropTypes.string.isRequired,
  genre: PropTypes.string.isRequired,
  year: PropTypes.number.isRequired,
  headerClickHandler: PropTypes.func.isRequired,
};

export default App;
