import React from "react";
import PropTypes from "prop-types";

class VideoPlayer extends React.PureComponent {
  constructor(props) {
    super(props);

    this._videoRef = React.createRef();

    this.state = {
      progress: 0,
      isLoading: true,
      isPlaying: props.isPlaying,
    };
  }

  _handlePlay() {
    this.setState(() => {
      return {isPlaying: true};
    });
  }

  _handlePause() {
    this.setState(() => {
      return {isPlaying: false};
    });
  }

  _handleLoad() {
    this.setState(() => {
      return {isLoading: false};
    });
  }

  _handleTimeUpdate(time) {
    this.setState(() => {
      return {progress: time};
    });
  }

  componentDidMount() {
    const {preview, poster} = this.props;
    const video = this._videoRef.current;

    video.poster = `${poster}MOVIE POSTER`;
    video.src = preview;

    video.oncanplaythrough = this._handleLoad;

    video.onplay = this._handlePlay;

    video.onpause = this._handlePause;

    video.ontimeupdate = () => {
      this._handleTimeUpdate(video.currentTime);
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
      video.play();
    } else {
      video.pause();
    }
  }

  render() {
    const {muted} = this.props;
    return (
      <video
        className="player__video"
        ref={this._videoRef}
        muted={muted}
      ></video>
    );
  }
}

VideoPlayer.propTypes = {
  muted: PropTypes.bool.isRequired,
  isPlaying: PropTypes.bool.isRequired,
  preview: PropTypes.string.isRequired,
  poster: PropTypes.string.isRequired,
};

export default VideoPlayer;
