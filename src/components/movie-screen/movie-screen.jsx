import React from "react";
import PropTypes from "prop-types";
import VideoPlayer from "../video-player/video-player.jsx";
import {FullScreen, useFullScreenHandle} from "react-full-screen";
import {stringifyCurrentTime} from "../../helpers/helpers.js";
import {Routes} from "../../const.js";
import {Link} from "react-router-dom";

const MovieScreen = (props) => {
  const {
    currentPosition,
    movieLength,
    isPlaying,
    movieSrc,
    poster,
    toggleMovieScreenHandler,
    handlePlayPause,
    isFullscreen,
    toggleFullScreen,
    getProgress,
    match,
  } = props;
  const {params} = match;

  const style = {
    left: currentPosition + `%`,
  };
  
  const handle = useFullScreenHandle();

  return (
    <FullScreen handle={handle}>
      <div className="player">
        <VideoPlayer
          isPlaying={isPlaying}
          poster={poster}
          preview={movieSrc}
          isMuted={false}
          getProgress={getProgress}
        />
        <Link to={Routes.MOVIE.replace(`:id`, params.id)} type="button" onClick={toggleMovieScreenHandler} className="player__exit">Exit</Link>

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

            {isFullscreen ? <button type="button" className="player__full-screen" onClick={() => {
              handle.exit();
              toggleFullScreen();
            }}>
              <svg viewBox="0 0 27 27" width="27" height="27">
                <use xlinkHref="#full-screen"></use>
              </svg>
              <span>Full screen</span>
            </button> : <button type="button" className="player__full-screen" onClick={() => {
              handle.enter();
              toggleFullScreen();
            }}>
              <svg viewBox="0 0 27 27" width="27" height="27">
                <use xlinkHref="#full-screen"></use>
              </svg>
              <span>Full screen</span>
            </button>}
          </div>
        </div>
      </div>
    </FullScreen>
  );
};

MovieScreen.propTypes = {
  getProgress: PropTypes.func,
  toggleFullScreen: PropTypes.func.isRequired,
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
