import React from "react";
import VideoPlayer from "../components/video-player/video-player.jsx";

const withVideoPlayer = (Component) => {
  class WithVideoPlayer extends React.PureComponent {
    constructor(props) {
      super(props);

      this.onCardHoverHandler = this.onCardHoverHandler.bind(this);
      this.handleMouseOut = this.handleMouseOut.bind(this);
      this._handleIfIsHovered = this._handleIfIsHovered.bind(this);

      this.state = {
        isVideo: false,
        isHovered: false,
      };

      this._timer = null;
    }

    _tryToKillTimer() {
      if (this._timer) {
        this._timer = clearTimeout(this._timer, 1000);
      }
    }

    componentWillUnmount() {
      this._tryToKillTimer();
    }

    _handleIfIsHovered() {
      if (this.state.isHovered) {
        this.setState((prevState) => {
          return {isVideo: !prevState.isVideo};
        });
      }
    }

    onCardHoverHandler() {
      this.setState((prevState) => {
        return {isHovered: !prevState.isHovered};
      });

      this._tryToKillTimer();

      this._timer = setTimeout(this._handleIfIsHovered, 1000);
    }

    handleMouseOut() {
      this.setState(() => {
        return {isVideo: false, isHovered: false};
      });
    }

    renderPlayer(preview, cover) {
      return (
        <VideoPlayer
          muted={true}
          isPlaying={true}
          preview={preview}
          poster={cover}
        />
      );
    }

    render() {

      return (
        <Component
          {...this.props}
          renderPlayer={this.renderPlayer}
          isVideo={this.state.isVideo}
          handleMouseOut={this.handleMouseOut}
          onCardHoverHandler={this.onCardHoverHandler}
        />
      );
    }
  }

  WithVideoPlayer.propTypes = {};

  return WithVideoPlayer;
};


export default withVideoPlayer;
