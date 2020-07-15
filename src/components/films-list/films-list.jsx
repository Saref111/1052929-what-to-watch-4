import React, {PureComponent} from "react";
import PropTypes from "prop-types";
import MovieCard from "../movie-card/movie-card.jsx";
import ShowMoreButton from "../show-more-button/show-more-button.jsx";
import {FILMS_COUNT} from "../../const.js";

class FilmsList extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      movie: null,
      filmsCount: FILMS_COUNT,
    };

    this.onCardHoverHandler = this.onCardHoverHandler.bind(this);
    this.onShowMoreButtonClickHandler = this.onShowMoreButtonClickHandler.bind(this);
  }

  onCardHoverHandler(reply) {
    this.setState(() => {
      return {movie: reply};
    });
  }

  onShowMoreButtonClickHandler() {
    this.setState((prevState) => {
      return {filmsCount: prevState.filmsCount + FILMS_COUNT};
    });
  }

  _getFilmsByCurrentCount(films) {
    return films.slice(0, this.state.filmsCount);
  }

  render() {
    const {films, onHeaderClickHandler} = this.props;
    const filmsToRender = this._getFilmsByCurrentCount(films);

    return (
      <React.Fragment>
        <div className="catalog__movies-list">
          {filmsToRender.map((movie, i) => (
            <MovieCard
              key={`${movie.src}-${i}`}
              movie={movie}
              onHeaderClickHandler={onHeaderClickHandler}
              onCardHoverHandler={this.onCardHoverHandler} />
          ))}
        </div>
        <ShowMoreButton
          onShowMoreButtonClickHandler={this.onShowMoreButtonClickHandler}
          isShown={this.state.filmsCount <= films.length}
        />
      </React.Fragment>

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
