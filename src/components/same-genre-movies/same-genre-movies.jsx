import React from "react";
import PropTypes from "prop-types";
import MovieCard from "../movie-card/movie-card.jsx";
import {GENRES} from "../../const.js";

const SameGenreMovies = (props) => {
  const {films, genre, onHeaderClickHandler} = props;
  let filteredMovies = films.filter((it) => it.details.genre === genre);


  if (filteredMovies.length > 4) {
    filteredMovies = filteredMovies.slice(0, 4);
  }

  return (
    <section className="catalog catalog--like-this">
      <h2 className="catalog__title">More like this</h2>

      <div className="catalog__movies-list">
        {filteredMovies.map((movie, i) => {
          return (
            <MovieCard key={`${movie.title}-${i}`}
              movie={movie}
              onCardHoverHandler={() => {}}
              onHeaderClickHandler={onHeaderClickHandler}
            />
          );
        })}

      </div>
    </section>

  );
};

SameGenreMovies.propTypes = {
  genre: PropTypes.oneOf(GENRES).isRequired,
  films: PropTypes.arrayOf(PropTypes.object).isRequired,
  onHeaderClickHandler: PropTypes.func.isRequired,
};

export default SameGenreMovies;
