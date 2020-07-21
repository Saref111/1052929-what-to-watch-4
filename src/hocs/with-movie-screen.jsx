import React from "react";
import MovieScreen from "../components/movie-screen/movie-screen.jsx";

const withMovieScreen = (Component) => {
  class WithMovieScreen extends React.PureComponent {
    constructor(props) {
      super(props);

      this.state = {
        progress: 0,
        isLoading: true,
        isPlaying: false,
        isFullscreen: false,
        isShowingScreen: false,
      };

      this.renderScreen = this.renderScreen.bind(this);
      this.showMovieScreen = this.showMovieScreen.bind(this);
    }

    showMovieScreen() {
      this.setState((prevState) => {
        return {isShowingScreen: !prevState.isShowingScreen}
      });
    }

    renderScreen(length, poster, src) {
      return (
        <MovieScreen
          {...this.props}
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
          showMovieScreenHandler={this.showMovieScreen}
        />
      );
    }
  }

  WithMovieScreen.propTypes = {};

  return WithMovieScreen;
};

export default withMovieScreen;
