import React from "react";
import PropTypes from "prop-types";
import Tabs from "../tabs/tabs.jsx";
import TabsNav from "../tabs-nav/tabs-nav.jsx";
import SameGenreMovies from "../same-genre-movies/same-genre-movies.jsx";
import withPageId from "../../hocs/with-page-id.jsx";
import withMovieScreen from "../../hocs/with-movie-screen.jsx";
import {connect} from "react-redux";
import {getAllFilms} from "../../reducer/data/selectors.js";


const DetailedMovieInfo = (props) => {
  const {films, page, handleClick, isShowingScreen, toggleMovieScreenHandler, renderMovieScreen, movieID, onHeaderClickHandler} = props;
  const movie = films.find((it) => {
    return it.id === movieID;
  });
  const {title, details, preview} = movie;
  const {bgPoster, cover, genre, year, time} = details;

  return (isShowingScreen ?
    renderMovieScreen(time, cover, preview) :
    <React.Fragment>
      <section className="movie-card movie-card--full">
        <div className="movie-card__hero">
          <div className="movie-card__bg">
            <img src={`${bgPoster}`} alt={`${title}`} />
          </div>

          <h1 className="visually-hidden">WTW</h1>

          <header className="page-header movie-card__head">
            <div className="logo">
              <a href="main.html" className="logo__link">
                <span className="logo__letter logo__letter--1">W</span>
                <span className="logo__letter logo__letter--2">T</span>
                <span className="logo__letter logo__letter--3">W</span>
              </a>
            </div>

            <div className="user-block">
              <div className="user-block__avatar">
                <img src="img/avatar.jpg" alt="User avatar" width="63" height="63" />
              </div>
            </div>
          </header>

          <div className="movie-card__wrap">
            <div className="movie-card__desc">
              <h2 className="movie-card__title">{`${title}`}</h2>
              <p className="movie-card__meta">
                <span className="movie-card__genre">{`${genre}`}</span>
                <span className="movie-card__year">{`${year}`}</span>
              </p>

              <div className="movie-card__buttons">
                <button onClick={toggleMovieScreenHandler} className="btn btn--play movie-card__button" type="button">
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
                <a href="add-review.html" className="btn movie-card__button">Add review</a>
              </div>
            </div>
          </div>
        </div>

        <div className="movie-card__wrap movie-card__translate-top">
          <div className="movie-card__info">
            <div className="movie-card__poster movie-card__poster--big">
              <img src={`${cover}`} alt={`${title}`} width="218" height="327" />
            </div>
            <div className="movie-card__desc">
              <TabsNav
                page={page}
                handleClick={handleClick}
              />
              <Tabs
                page={page}
                info={details}
              />
            </div>
          </div>
        </div>
      </section>
      <div className="page-content">
        <SameGenreMovies
          currentID={movieID}
          onHeaderClickHandler={onHeaderClickHandler}
          genre={genre}
          films={films}
        />
        <footer className="page-footer">
          <div className="logo">
            <a href="main.html" className="logo__link logo__link--light">
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


DetailedMovieInfo.propTypes = {
  movieID: PropTypes.number.isRequired,
  renderMovieScreen: PropTypes.func.isRequired,
  toggleMovieScreenHandler: PropTypes.func.isRequired,
  isShowingScreen: PropTypes.bool.isRequired,
  onHeaderClickHandler: PropTypes.func.isRequired,
  page: PropTypes.number.isRequired,
  handleClick: PropTypes.func.isRequired,
  films: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    src: PropTypes.string.isRequired,
    details: PropTypes.object.isRequired,
  })).isRequired,
};

const mapStateToProps = (state) => {
  return {films: getAllFilms(state)};
};

export const DetailedMovieInfoTest = withMovieScreen(withPageId(DetailedMovieInfo));
export default connect(mapStateToProps)(withMovieScreen(withPageId(DetailedMovieInfo)));
