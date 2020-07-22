import React from "react";
import MovieScreen from "../components/movie-screen/movie-screen.jsx";

const withMovieScreen = (Component) => {
  class WithMovieScreen extends React.PureComponent {
    constructor(props) {
      super(props);

      this.state = {
        progress: 0,
        isLoading: true,
        isPlaying: true,
        isFullscreen: false,
        isShowingScreen: false,
      };

      this.renderScreen = this.renderScreen.bind(this);
      this.toggleMovieScreen = this.toggleMovieScreen.bind(this);
      this.handlePlayPause = this.handlePlayPause.bind(this);
    }

    handlePlayPause() {
      this.setState((prevState) => {
        return {isPlaying: !prevState.isPlaying};
      });
    }

    toggleMovieScreen() {
      this.setState((prevState) => {
        return {isShowingScreen: !prevState.isShowingScreen};
      });
    }

    renderScreen(length, poster, src) {
      return (
        <MovieScreen
          {...this.props}
          handlePlayPause={this.handlePlayPause}
          toggleMovieScreenHandler={this.toggleMovieScreen}
          currentPosition={this.state.progress}
          isPlaying={this.state.isPlaying}
          isFullscreen={this.state.isFullscreen}
          movieLength={length}
          poster={poster}
          movieSrc={src}
        />
      );
    }

    render() {
      return (
        <Component
          {...this.props}
          renderMovieScreen={this.renderScreen}
          isShowingScreen={this.state.isShowingScreen}
          toggleMovieScreenHandler={this.toggleMovieScreen}
        />
      );
    }
  }

  WithMovieScreen.propTypes = {};

  return WithMovieScreen;
};

export default withMovieScreen;
