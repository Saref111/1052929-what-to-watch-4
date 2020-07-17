import React from "react";
import {FILMS_COUNT} from "../const.js";

const withFilms = (Component) => {
  class WithFilms extends React.Component {
    constructor(props) {
      super(props);

      this.state = {
        movie: null,
        filmsCount: FILMS_COUNT,
      };

      this.onCardHoverHandler = this.onCardHoverHandler.bind(this);
      this.onShowMoreButtonClickHandler = this.onShowMoreButtonClickHandler.bind(this);
    }

    onCardHoverHandler(reply) {
      this.setState(() => {
        return {movie: reply};
      });
    }

    onShowMoreButtonClickHandler() {
      this.setState((prevState) => {
        return {filmsCount: prevState.filmsCount + FILMS_COUNT};
      });
    }

    render() {
      return <Component
        {...this.props}
        movie={this.state.movie}
        filmsCount={this.state.filmsCount}
        onCardHoverHandler={this.onCardHoverHandler}
        onShowMoreButtonClickHandler={this.onShowMoreButtonClickHandler}
      />;
    }
  }

  WithFilms.propTypes = {};

  return WithFilms;
};


export default withFilms;
