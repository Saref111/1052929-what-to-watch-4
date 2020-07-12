import React from "react";
import PropTypes from "prop-types";
import {uppercaseFirstLetter} from "../../helpers/helpers.js";

const GenresList = (props) => {
  const {genresList, currentGenre} = props;

  return (
    <ul className="catalog__genres-list">
      {genresList.map((genre) => {
        return (
          <li key={genre} className={`catalog__genres-item ${genre === currentGenre ? `catalog__genres-item--active` : `` }`}>
            <a href="" className="catalog__genres-link">{uppercaseFirstLetter(genre)}</a>
          </li>
        );
      })}
    </ul>
  );
};

GenresList.propTypes = {
  genresList: PropTypes.arrayOf(PropTypes.string).isRequired,
  currentGenre: PropTypes.string.isRequired,
};
