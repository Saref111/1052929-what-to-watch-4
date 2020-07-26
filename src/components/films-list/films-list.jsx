import React, {PureComponent} from "react";
import PropTypes from "prop-types";
import MovieCard from "../movie-card/movie-card.jsx";
import ShowMoreButton from "../show-more-button/show-more-button.jsx";
import withFilms from "../../hocs/with-films.jsx";

class FilmsList extends PureComponent {
  constructor(props) {
    super(props);
  }

  _getFilmsByCurrentCount(films) {
    const {filmsCount} = this.props;

    return films.slice(0, filmsCount);
  }

  render() {
    const {films, onHeaderClickHandler, onCardHoverHandler, onShowMoreButtonClickHandler, filmsCount} = this.props;
    const filmsToRender = this._getFilmsByCurrentCount(films);

    return (
      <React.Fragment>
        <div className="catalog__movies-list">
          {filmsToRender.map((movie, i) => (
            <MovieCard
              key={`${movie.src}-${i}`}
              movie={movie}
              onHeaderClickHandler={onHeaderClickHandler}
              onCardHoverHandler={onCardHoverHandler} />
          ))}
        </div>
        <ShowMoreButton
          onShowMoreButtonClickHandler={onShowMoreButtonClickHandler}
          isShown={filmsCount <= films.length}
        />
      </React.Fragment>

    );
  }
}

FilmsList.propTypes = {
  onShowMoreButtonClickHandler: PropTypes.func.isRequired,
  onCardHoverHandler: PropTypes.func.isRequired,
  filmsCount: PropTypes.number.isRequired,
  onHeaderClickHandler: PropTypes.func.isRequired,
  films: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string.isRequired,
    src: PropTypes.string.isRequired,
  })).isRequired,
};

export {FilmsList};
export default withFilms(FilmsList);
