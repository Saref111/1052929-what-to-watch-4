import React, {PureComponent} from "react";
import PropTypes from "prop-types";
import MovieCard from "../movie-card/movie-card.jsx";

class FilmsList extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      movie: null
    };

    this._onCardHoverHandler = this._onCardHoverHandler.bind(this);
  }

  _onCardHoverHandler(reply) {
    this.setState(() => {
      return {movie: reply};
    });
  }

  render() {
    const {films, onHeaderClickHandler} = this.props;

    return (
      <div className="catalog__movies-list">
        {films.map((movie, i) => (
          <MovieCard
            key={`${movie.src}-${i}`}
            movie={movie}
            onHeaderClickHandler={onHeaderClickHandler}
            onCardHoverHandler={this._onCardHoverHandler} />
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
