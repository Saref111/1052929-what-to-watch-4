import React, {PureComponent} from "react";
import PropTypes from "prop-types";
import {Route, Switch, BrowserRouter} from "react-router-dom";
import Main from "../main/main.jsx";
import DetailedMovieInfo from "../detailed-movie-info/detailed-movie-info.jsx";

class App extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      movieID: -1,
    };

    this.onHeaderClickHandler = this.onHeaderClickHandler.bind(this);
  }

  onHeaderClickHandler(id) {
    this.setState(() => {
      return {movieID: id};
    });
  }

  _renderApp() {
    const {name, genre, year, films} = this.props;

    return (
      <Main
        name={name}
        genre={genre}
        year={year}
        onHeaderClickHandler={this.onHeaderClickHandler}
        films={films}
      />
    );
  }

  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            {this._renderApp()}
          </Route>
          <Route exact path="/dev-film">
            <DetailedMovieInfo movie={this.props.films[0]} />
          </Route>
        </Switch>
      </BrowserRouter>
    );
  }
}

App.propTypes = {
  name: PropTypes.string.isRequired,
  genre: PropTypes.string.isRequired,
  year: PropTypes.number.isRequired,
  films: PropTypes.array.isRequired,
};

export default App;
