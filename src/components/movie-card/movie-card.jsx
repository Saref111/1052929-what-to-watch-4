import React, {PureComponent} from "react";
import PropTypes from "prop-types";
import VideoPlayer from "../video-player/video-player.jsx";

class MovieCard extends PureComponent {
  constructor(props) {
    super(props);

    this._onCardHoverHandler = this._onCardHoverHandler.bind(this);
    this._onHeaderClickHandler = this._onHeaderClickHandler.bind(this);

    this.state = {
      isVideo: false,
      isHovered: false,
    };
  }

  _onCardHoverHandler() {
    this.props.onCardHoverHandler(this.props.movie);

    this.setState((prevState) => {
      return {isHovered: !prevState.isHovered};
    });

    const handler = () => {

      if (this.state.isHovered) {
        this.setState((prevState) => {
          return {isVideo: !prevState.isVideo};
        });
      }
    };

    setTimeout(handler, 1000);
  }

  _onHeaderClickHandler(evt) {
    evt.preventDefault();

    this.props.onHeaderClickHandler(this.props.movie.id);
  }

  render() {
    const {isVideo} = this.state;
    const {movie} = this.props;
    const {preview, title, src, details} = movie;
    const {cover} = details;

    return (
      <article
        onMouseOut={() => {
          this.setState(() => {
            return {isVideo: false, isHovered: false};
          });
        }}
        onMouseOver={this._onCardHoverHandler}
        className="small-movie-card catalog__movies-card">
        <div className="small-movie-card__image">
          {isVideo ?
            <VideoPlayer
              isPlaying={true}
              preview={preview}
              poster={cover}
            /> :
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
};

export default MovieCard;
