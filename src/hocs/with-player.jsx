import React from "react";
import PropTypes from "prop-types";
import MovieCard from "../components/movie-card/movie-card.jsx";

const withPlayer = (Component) => {
  class WithPlayer extends React.PureComponent {
    constructor(props) {
      super(props);

      this._videoRef = React.createRef();

      this.state = {
        progress: 0,
        isLoading: true,
        isPlaying: props.isPlaying,
      };

      this.handleLoad = this.handleLoad.bind(this);
      this.handlePlay = this.handlePlay.bind(this);
      this.handlePause = this.handlePause.bind(this);
      this.handleTimeUpdate = this.handleTimeUpdate.bind(this);
    }

    handlePlay() {
      this.setState(() => {
        return {isPlaying: true};
      });
    }

    handlePause() {
      this.setState(() => {
        return {isPlaying: false};
      });
    }

    handleLoad() {
      this.setState(() => {
        return {isLoading: false};
      });
    }

    handleTimeUpdate(time) {
      this.setState(() => {
        return {progress: time};
      });
    }

    componentDidMount() {
      const {preview, poster, isMuted} = this.props;
      const video = this._videoRef.current;

      video.poster = `${poster}MOVIE POSTER`;
      video.src = preview;
      video.muted = isMuted;


      video.oncanplaythrough = this.handleLoad;

      video.onplay = this.handlePlay;

      video.onpause = this.handlePause;

      video.ontimeupdate = () => {
        this.handleTimeUpdate(Math.floor(video.currentTime));
      };
    }

    componentWillUnmount() {
      const video = this._videoRef.current;

      video.oncanplaythrough = null;
      video.onpause = null;
      video.onplay = null;
      video.ontimeupdate = null;
      video.poster = ``;
      video.src = ``;
    }

    componentDidUpdate() {
      const video = this._videoRef.current;

      if (this.props.isPlaying) {
        video.play().catch((err) => err);
      } else {
        video.pause();
      }
    }

    render() {
      return <Component
        {...this.props}
      >
        <video
          className="player__video"
          ref={this._videoRef}
        ></video>
      </Component>;
    }
  }

  WithPlayer.propTypes = {
    isPlaying: PropTypes.bool.isRequired,
    isMuted: PropTypes.bool.isRequired,
    preview: PropTypes.string.isRequired,
    poster: PropTypes.string.isRequired,
  };

  return WithPlayer;
};

export default withPlayer;
