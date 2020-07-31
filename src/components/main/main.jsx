import React from "react";
import PropTypes from "prop-types";
import FilmsList from "../films-list/films-list.jsx";
import GenresList from "../genres-list/genres-list.jsx";
import {GENRES, Authorization} from "../../const.js";
import withMovieScreen from "../../hocs/with-movie-screen.jsx";
import {actionCreator as dataActionCreator} from "../../reducer/data/data.js";
import {getAllFilms, getFilteredFilms} from "../../reducer/data/selectors.js";
import {uppercaseFirstLetter} from "../../helpers/helpers.js";
import {getAuthorizationStatus} from "../../reducer/user/selectors.js";
import {connect} from "react-redux";

const Main = (props) => {

  const {
    promo,
    onHeaderClickHandler,
    allFilms,
    films,
    filterGenre,
    onFilterChangeHandler,
    isShowingScreen,
    toggleMovieScreenHandler,
    renderMovieScreen,
    authorizationStatus,
  } = props;

  const {details, preview, title} = promo;
  const {time, cover, year, genre, bgPoster} = details;

  return (isShowingScreen ? renderMovieScreen(time, cover, preview) : // change preview to movie link
    <React.Fragment>
      <section className="movie-card">
        <div className="movie-card__bg">
          <img src={bgPoster} alt={title} />
        </div>

        <h1 className="visually-hidden">WTW</h1>

        <header className="page-header movie-card__head">
          <div className="logo">
            <a className="logo__link">
              <span className="logo__letter logo__letter--1">W</span>
              <span className="logo__letter logo__letter--2">T</span>
              <span className="logo__letter logo__letter--3">W</span>
            </a>
          </div>

          <div className="user-block">
            {authorizationStatus === Authorization.AUTH ?
              <div className="user-block__avatar"><img src="img/avatar.jpg" alt="User avatar" width="63" height="63" /></div>
              : <a href="sign-in.html" className="user-block__link">Sign in</a>}
          </div>
        </header>

        <div className="movie-card__wrap">
          <div className="movie-card__info">
            <div className="movie-card__poster">
              <img src="img/the-grand-budapest-hotel-poster.jpg" alt="The Grand Budapest Hotel poster" width="218" height="327" />
            </div>

            <div className="movie-card__desc">
              <h2 className="movie-card__title">{title}</h2>
              <p className="movie-card__meta">
                <span className="movie-card__genre">{`${uppercaseFirstLetter(genre)}`}</span>
                <span className="movie-card__year">{year}</span>
              </p>

              <div className="movie-card__buttons">
                <button className="btn btn--play movie-card__button" onClick={toggleMovieScreenHandler} type="button">
                  <svg viewBox="0 0 19 19" width="19" height="19">
                    <use xlinkHref="#play-s"></use>
                  </svg>
                  <span>Play</span>
                </button>
                <button className="btn btn--list movie-card__button" type="button">
                  <svg viewBox="0 0 19 20" width="19" height="20">
                    <use xlinkHref="#add"></use>
                  </svg>
                  <span>My list</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="page-content">
        <section className="catalog">
          <h2 className="catalog__title visually-hidden">Catalog</h2>

          <GenresList
            genresList={GENRES} // should get then from server
            currentGenre={filterGenre}
            onFilterChangeHandler={onFilterChangeHandler}
            allFilms={allFilms}
          />
          <FilmsList films={films} onHeaderClickHandler={onHeaderClickHandler}/>
        </section>

        <footer className="page-footer">
          <div className="logo">
            <a className="logo__link logo__link--light">
              <span className="logo__letter logo__letter--1">W</span>
              <span className="logo__letter logo__letter--2">T</span>
              <span className="logo__letter logo__letter--3">W</span>
            </a>
          </div>

          <div className="copyright">
            <p>© 2019 What to watch Ltd.</p>
          </div>
        </footer>
      </div>
    </React.Fragment>
  );
};


Main.propTypes = {
  authorizationStatus: PropTypes.string.isRequired,
  isShowingScreen: PropTypes.bool.isRequired,
  renderMovieScreen: PropTypes.func.isRequired,
  toggleMovieScreenHandler: PropTypes.func.isRequired,
  onFilterChangeHandler: PropTypes.func.isRequired,
  filterGenre: PropTypes.string.isRequired,
  promo: PropTypes.object.isRequired,
  onHeaderClickHandler: PropTypes.func.isRequired,
  films: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    src: PropTypes.string.isRequired,
    details: PropTypes.object.isRequired,
  })).isRequired,
  allFilms: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    src: PropTypes.string.isRequired,
    details: PropTypes.object.isRequired,
  })).isRequired,
};

const mapStateToProps = (state) => {
  return {
    allFilms: getAllFilms(state),
    films: getFilteredFilms(state),
    authorizationStatus: getAuthorizationStatus(state),
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onFilterChangeHandler(filter, films) {
      dispatch(dataActionCreator.changeFilter(filter));
      dispatch(dataActionCreator.getFilmsByType(films, filter));
    },
  };
};

export const MainTest = withMovieScreen(Main);
export default connect(mapStateToProps, mapDispatchToProps)(withMovieScreen(Main));
