import React from "react";
import PropTypes from "prop-types";
import Tabs from "@components/tabs/tabs.jsx";
import TabsNav from "@components/tabs-nav/tabs-nav.jsx";
import SameGenreMovies from "@components/same-genre-movies/same-genre-movies.jsx";
import withPageId from "@hocs/with-page-id.jsx";
import withMovieScreen from "@hocs/with-movie-screen.jsx";
import {connect} from "react-redux";
import {getAllFilms, getComments} from "@reducer/data/selectors.js";
import {actionCreator as userActionCreator} from "@reducer/user/user.js";
import {Operation as dataOperation} from "@reducer/data/data.js";
import {Authorization, Routes} from "../../const.js";
import {getAuthorizationStatus, getUserData} from "@reducer/user/selectors.js";
import {getMovieId} from "@reducer/movie/selectors.js";
import {Link} from "react-router-dom";


const DetailedMovieInfo = (props) => {
  if (props.films.length < 1) {
    return `LOADING`;
  }

  const {
    films,
    page,
    handleClick,
    isShowingScreen,
    toggleMovieScreenHandler,
    renderMovieScreen,
    movieID,
    loadComments,
    onHeaderClickHandler,
    authorizationStatus,
    startAuthorizationHandler,
    match,
    comments,
    userData,
    toggleFavorite,
    history,
  } = props;
  const {params, url} = match;

  if (!comments || comments.length < 1) {
    loadComments(Number(params.id));
  }

  const movie = films.find((it) => {
    return String(it.id) === params.id;
  });

  const {title, details, preview, isFavorite} = movie;
  const {bgPoster, cover, genre, year, time} = details;

  return (isShowingScreen || url.endsWith(`player`) ?
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
              <Link to={Routes.ROOT} onClick={() => {
                onHeaderClickHandler(-1);
              }} href="" className="logo__link">
                <span className="logo__letter logo__letter--1">W</span>
                <span className="logo__letter logo__letter--2">T</span>
                <span className="logo__letter logo__letter--3">W</span>
              </Link>
            </div>

            <div className="user-block">
              {authorizationStatus === Authorization.AUTH ?
                <div className="user-block__avatar">
                  <Link to={Routes.FAVORITES} onClick={() => {}}>
                    <img src={`https://4.react.pages.academy${userData.avatar}`} alt="User avatar" width="63" height="63" />
                  </Link>
                </div>
                : <Link to={Routes.LOGIN} href="#" onClick={startAuthorizationHandler} className="user-block__link">Sign in</Link>}
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
                <Link to={Routes.PLAYER.replace(`:id`, String(params.id))} onClick={toggleMovieScreenHandler} className="btn btn--play movie-card__button" type="button">
                  <svg viewBox="0 0 19 19" width="19" height="19">
                    <use xlinkHref="#play-s"></use>
                  </svg>
                  <span>Play</span>
                </Link>
                {

                  !isFavorite ? <button onClick={() => {
                    if (authorizationStatus === Authorization.AUTH) {
                      toggleFavorite(params.id);
                    } else {
                      history.push(Routes.LOGIN);
                    }
                  }} className="btn btn--list movie-card__button" type="button">
                    <svg viewBox="0 0 19 20" width="19" height="20">
                      <use xlinkHref="#add"></use>
                    </svg>
                    <span>My list</span>
                  </button> :
                    <button onClick={() => {
                      toggleFavorite(params.id);
                    }} className="btn btn--list movie-card__button" type="button">
                      <svg viewBox="0 0 18 14" width="18" height="14">
                        <use xlinkHref="#in-list"></use>
                      </svg>
                      <span>My list</span>
                    </button>
                }
                {authorizationStatus === Authorization.AUTH ?
                  <Link to={Routes.REVIEW.replace(`:id`, String(params.id))} href="" className="btn movie-card__button">Add review</Link> : ``}
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
                comments={comments}
              />
            </div>
          </div>
        </div>
      </section>
      <div className="page-content">
        <SameGenreMovies
          currentID={movieID !== -1 ? movieID : Number(params.id)}
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
  startAuthorizationHandler: PropTypes.func.isRequired,
  match: PropTypes.shape({
    params: PropTypes.object.isRequired,
  }),
  authorizationStatus: PropTypes.string.isRequired,
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
  return {
    films: getAllFilms(state),
    authorizationStatus: getAuthorizationStatus(state),
    movieID: getMovieId(state),
    comments: getComments(state),
    userData: getUserData(state),
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    startAuthorizationHandler() {
      dispatch(userActionCreator.setSigningInStatus(true));
    },

    loadComments(id) {
      dispatch(dataOperation.loadReviews(id));
    },

    toggleFavorite(id) {
      dispatch(dataOperation.toggleFavorite(id));
    },
  };
};

export const DetailedMovieInfoTest = withMovieScreen(withPageId(DetailedMovieInfo));
export default connect(mapStateToProps, mapDispatchToProps)(withMovieScreen(withPageId(DetailedMovieInfo)));
