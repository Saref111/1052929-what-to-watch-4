import React, {PureComponent} from "react";
import PropTypes from "prop-types";

class MovieCard extends PureComponent {
  constructor(props) {
    super(props);
  }

  render() {
    const {movie, onCardHoverHandler} = this.props;
    const {title, src} = movie;
    return (
      <article onHover={onCardHoverHandler} className="small-movie-card catalog__movies-card">
        <div className="small-movie-card__image">
          <img src={`${src}`} alt={`${title}`} width="280" height="175" />
        </div>
        <h3 className="small-movie-card__title">
          <a className="small-movie-card__link" href="movie-page.html">{`${title}`}</a>
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
};

export default MovieCard;
