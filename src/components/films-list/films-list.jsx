import React, {PureComponent} from "react";
import PropTypes from "prop-types";
import MovieCard from "../movie-card/movie-card.jsx";

class FilmsList extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      movie: null
    };
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
            onCardHoverHandler={() => {
              this.setState(() => {
                return {movie};
              });
              // this.setState({
              //   movie
              // });
            }} />
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
