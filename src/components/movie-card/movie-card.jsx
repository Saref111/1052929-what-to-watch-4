import React, {PureComponent} from "react";
import PropTypes from "prop-types";

class MovieCard extends PureComponent {
  constructor(props) {
    super(props);

    this._onCardHoverHandler = this._onCardHoverHandler.bind(this);
  }

  _onCardHoverHandler() {
    this.props.onCardHoverHandler(this.props.movie);
  }

  render() {
    const {movie, onHeaderClickHandler} = this.props;
    const {title, src} = movie;
    return (
      <article
        onMouseOver={this._onCardHoverHandler}
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
    id: PropTypes.number.isRequired,
    details: PropTypes.shape({
      bgPoster: PropTypes.string.isRequired,
      cover: PropTypes.string.isRequired,
      genre: PropTypes.string.isRequired, // one of genreList
      year: PropTypes.number.isRequired,
    }),
  }).isRequired,
  onCardHoverHandler: PropTypes.func.isRequired,
  onHeaderClickHandler: PropTypes.func.isRequired,
};

export default MovieCard;
