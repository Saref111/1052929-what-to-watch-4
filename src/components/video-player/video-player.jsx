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

  componentDidMount() {
    const {preview, poster} = this.props;
    const video = this._videoRef.current;

    video.poster = poster;
    video.src = preview;

    video.oncanplaythrough = () => {
      this.setState((prevState) => {
        return {isPlaying: !prevState.isPlaying};
      });
    };

    video.onplay = () => {
      this.setState(() => {
        return {isPlaying: true};
      });
    };

    video.onpause = () => {
      this.setState(() => {
        return {isPlaying: false};
      });
    };

    video.ontimeupdate = () => {
      this.setState(() => {
        return {progress: video.currentTime};
      });
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
    return (
      <video
        className="player__video"
        ref={this._videoRef}
      ></video>
    );
  }
}

VideoPlayer.propTypes = {
  isPlaying: PropTypes.bool.isRequired,
  preview: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  poster: PropTypes.string.isRequired,
};
