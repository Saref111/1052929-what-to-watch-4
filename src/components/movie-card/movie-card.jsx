import React, {PureComponent} from "react";
import PropTypes from "prop-types";
import withVideoPlayer from "../../hocs/with-video-player.jsx";

class MovieCard extends PureComponent {
  constructor(props) {
    super(props);

    this._onHeaderClickHandler = this._onHeaderClickHandler.bind(this);
  }

  _onHeaderClickHandler(evt) {
    evt.preventDefault();

    this.props.onHeaderClickHandler(this.props.movie.id);
  }

  render() {
    const {movie, renderPlayer, isVideo, handleMouseOut, onCardHoverHandler} = this.props;
    const {preview, title, src, details} = movie;
    const {cover} = details;

    return (
      <article
        onMouseOut={handleMouseOut}
        onMouseOver={onCardHoverHandler}
        className="small-movie-card catalog__movies-card">
        <div className="small-movie-card__image">
          {isVideo ?
            renderPlayer(preview, cover, movie.id) :
            <img src={`${src}${title}`} alt={`${title}`} width="280" height="175" />
          }
        </div>
        <h3 className="small-movie-card__title">
          <a onClick={this._onHeaderClickHandler} className="small-movie-card__link" href="movie-page.html">{`${title}`}</a>
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
    preview: PropTypes.string.isRequired,
    details: PropTypes.shape({
      bgPoster: PropTypes.string.isRequired,
      cover: PropTypes.string.isRequired,
      genre: PropTypes.string.isRequired, // one of genreList
      year: PropTypes.number.isRequired,
    }).isRequired,
  }).isRequired,
  onCardHoverHandler: PropTypes.func.isRequired,
  onHeaderClickHandler: PropTypes.func.isRequired,
  renderPlayer: PropTypes.func.isRequired,
  handleMouseOut: PropTypes.func.isRequired,
  isVideo: PropTypes.bool.isRequired,
};


export {MovieCard};
export default withVideoPlayer(MovieCard);
