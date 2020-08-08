import React, {PureComponent} from "react";
import PropTypes from "prop-types";
import VideoPlayer from "@components/video-player/video-player.jsx";
import withHovered from "@hocs/with-hovered.jsx";
import {Link} from "react-router-dom";
import {Routes} from "../../const.js";

class MovieCard extends PureComponent {
  constructor(props) {
    super(props);

    this._onHeaderClickHandler = this._onHeaderClickHandler.bind(this);
  }

  _onHeaderClickHandler() {
    this.props.onHeaderClickHandler(this.props.movie.id);
  }

  render() {
    const {movie, isVideo, handleMouseOut, onCardHoverHandler} = this.props;
    const {preview, title, src, details, id} = movie;
    const {cover} = details;

    return (
      <article
        onMouseOut={handleMouseOut}
        onMouseOver={onCardHoverHandler}
        className="small-movie-card catalog__movies-card">
        <div className="small-movie-card__image">
          {isVideo ?
            <VideoPlayer
              isPlaying={true}
              poster={cover}
              preview={preview}
              isMuted={true}
            /> :
            <img src={`${src}`} alt={`${title}`} width="280" height="175" />
          }
        </div>
        <h3 className="small-movie-card__title">
          <Link
            to={Routes.MOVIE.replace(`:id`, String(id))}
            href=""
            onClick={this._onHeaderClickHandler}
            className="small-movie-card__link" >{`${title}`}
          </Link>
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
  handleMouseOut: PropTypes.func.isRequired,
  isVideo: PropTypes.bool.isRequired,
};

export default withHovered(MovieCard);
