import React from "react";
import PropTypes from "prop-types";
import VideoPlayer from "../video-player/video-player.jsx";
import {stringifyCurrentTime} from "../../helpers/helpers.js";

const MovieScreen = (props) => {
  const {currentPosition, movieLength, isPlaying, movieSrc, poster, toggleMovieScreenHandler, handlePlayPause} = props;
  const style = {
    left: currentPosition + `%`,
  };

  return (
    <div className="player">
      <VideoPlayer
        isPlaying={isPlaying}
        poster={poster}
        preview={movieSrc}
        isMuted={false}
      />
      <button type="button" onClick={toggleMovieScreenHandler} className="player__exit">Exit</button>

      <div className="player__controls">
        <div className="player__controls-row">
          <div className="player__time">
            <progress className="player__progress" value={currentPosition} max="100"></progress>
            <div className="player__toggler" style={style}>Toggler</div>
          </div>
          <div className="player__time-value">{stringifyCurrentTime(currentPosition, movieLength)}</div>
        </div>

        <div className="player__controls-row">
          {!isPlaying ? <button type="button" onClick={handlePlayPause} className="player__play">
            <svg viewBox="0 0 19 19" width="19" height="19" fill="#FFFFFF">
              <use xlinkHref="#play-s"></use>
            </svg>
            <span>Play</span>
          </button> : <button onClick={handlePlayPause} type="button" className="player__play">
            <svg viewBox="0 0 14 21" width="14" height="21">
              <use xlinkHref="#pause"></use>
            </svg>
            <span>Pause</span>
          </button>}
          <div className="player__name">Transpotting</div>

          <button type="button" className="player__full-screen">
            <svg viewBox="0 0 27 27" width="27" height="27">
              <use xlinkHref="#full-screen"></use>
            </svg>
            <span>Full screen</span>
          </button>
        </div>
      </div>
    </div>
  );
};

MovieScreen.propTypes = {
  handlePlayPause: PropTypes.func.isRequired,
  toggleMovieScreenHandler: PropTypes.func.isRequired,
  currentPosition: PropTypes.number.isRequired,
  isPlaying: PropTypes.bool.isRequired,
  isFullscreen: PropTypes.bool.isRequired,
  movieLength: PropTypes.number.isRequired,
  movieSrc: PropTypes.string.isRequired,
  poster: PropTypes.string.isRequired,
};

export default MovieScreen;
