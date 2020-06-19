import React, {PureComponent} from "react";
import PropTypes from "prop-types";

class MovieCard extends PureComponent {
  constructor(props) {
    super(props);
  }

  render() {
    const {movie, onCardHoverHandler, onHeaderClickHandler} = this.props;
    const {title, src} = movie;
    return (
      <article
        onMouseOver={() => {
          onCardHoverHandler(movie);
        }}
        className="small-movie-card catalog__movies-card">
        <div className="small-movie-card__image">
          <img src={`${src}${title}`} alt={`${title}`} width="280" height="175" />
        </div>
        <h3 className="small-movie-card__title">
          <a onClick={onHeaderClickHandler} className="small-movie-card__link" href="movie-page.html">{`${title}`}</a>
        </h3>
      </article>
    );
  }
}

MovieCard.propTypes = {
  movie: PropTypes.shape({
    title: PropTypes.string.isRequired,
    src: PropTypes.string.isRequired,
  }).isRequired,
  onCardHoverHandler: PropTypes.func.isRequired,
  onHeaderClickHandler: PropTypes.func.isRequired,
};

export default MovieCard;
