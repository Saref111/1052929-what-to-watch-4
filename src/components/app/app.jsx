import React, {PureComponent} from "react";
import PropTypes from "prop-types";
import Main from "../main/main.jsx";

class App extends PureComponent {
  constructor(props) {
    super(props);
  }

  _renderApp() {
    const {name, genre, year, onHeaderClickHandler, films} = this.props;

    return (
      <Main
        name={name}
        genre={genre}
        year={year}
        onHeaderClickHandler={onHeaderClickHandler}
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
          <Route exact path="/dev-component">
            {/* <Component /> */}
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
  onHeaderClickHandler: PropTypes.func.isRequired,
  films: PropTypes.array.isRequired,
};

export default App;
