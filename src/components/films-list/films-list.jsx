import React, {PureComponent} from "react";
import PropTypes from "prop-types";
import MovieCard from "../movie-card/movie-card.jsx";
import {FILMS_COUNT} from "../../const.js";

class FilmsList extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      movie: null,
      filmsCount: FILMS_COUNT,
    };

    this.onCardHoverHandler = this.onCardHoverHandler.bind(this);
  }

  onCardHoverHandler(reply) {
    this.setState(() => {
      return {movie: reply};
    });
  }

  _getFilmsByCurrentCount(films) {
    return films.slice(0, this.state.filmsCount);
  }

  render() {
    const {films, onHeaderClickHandler} = this.props;
    const filmsToRender = this._getFilmsByCurrentCount(films);

    return (
      <div className="catalog__movies-list">
        {filmsToRender.map((movie, i) => (
          <MovieCard
            key={`${movie.src}-${i}`}
            movie={movie}
            onHeaderClickHandler={onHeaderClickHandler}
            onCardHoverHandler={this.onCardHoverHandler} />
        ))}
      </div>
    );
  }
}

FilmsList.propTypes = {
  onHeaderClickHandler: PropTypes.func.isRequired,
  films: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string.isRequired,
    src: PropTypes.string.isRequired,
  })).isRequired,
};

export default FilmsList;
