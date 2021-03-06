import React from "react";
import PropTypes from "prop-types";
import {getMovieId} from "@reducer/movie/selectors.js";
import {getAllFilms} from "@reducer/data/selectors.js";
import {getUserData} from "@reducer/user/selectors.js";
import {Operation as userOperation} from "@reducer/user/user.js";
import {connect} from "react-redux";
import {Routes} from "../../const";
import {Link} from "react-router-dom";

const NewReviewPage = (props) => {
  const {
    userData,
    allFilms,
    sendNewReview,
    match,
    history,
  } = props;

  if (allFilms.length < 1) {
    return `LOADING`;
  }
  const {params} = match;

  const currentMovie = allFilms.find(({id}) => String(id) === String(params.id));
  const {src, title, details} = currentMovie;

  const formRef = React.createRef();

  const checkValidity = (data) => {
    if (!data) {
      return false;
    }
    return data.length >= 50 && data.length <= 400;
  };

  const submitFormHandler = (evt) => {
    evt.preventDefault();

    const reviewText = new FormData(formRef.current).get(`review-text`);
    const reviewStars = new FormData(formRef.current).get(`rating`);

    const toggleFormDisabling = (isDisabled) => {
      formRef.current.querySelectorAll(`form input, form select, form textarea, form button`)
        .forEach((it) => isDisabled ? it.setAttribute(`disabled`, `disabled`) : it.removeAttribute(`disabled`));
    };

    if (checkValidity(reviewText)) {
      toggleFormDisabling(true);

      sendNewReview({comment: reviewText, rating: reviewStars}, Number(params.id)).then(() => {
        toggleFormDisabling(false);
        history.goBack();
      });

    }
  };

  return (
    <section className="movie-card movie-card--full">
      <div className="movie-card__header">
        <div className="movie-card__bg">
          <img src={src} alt={title} />
        </div>

        <h1 className="visually-hidden">WTW</h1>

        <header className="page-header">
          <div className="logo">
            <Link href="" to={Routes.ROOT} className="logo__link">
              <span className="logo__letter logo__letter--1">W</span>
              <span className="logo__letter logo__letter--2">T</span>
              <span className="logo__letter logo__letter--3">W</span>
            </Link>
          </div>

          <nav className="breadcrumbs">
            <ul className="breadcrumbs__list">
              <li className="breadcrumbs__item">
                <Link to={Routes.MOVIE.replace(`:id`, params.id)} href="movie-page.html" className="breadcrumbs__link">{title}</Link>
              </li>
              <li className="breadcrumbs__item">
                <a className="breadcrumbs__link">Add review</a>
              </li>
            </ul>
          </nav>

          <div className="user-block">
            <div className="user-block__avatar">
              <img src={`https://4.react.pages.academy${userData.avatar}`} alt="User avatar" width="63" height="63" />
            </div>
          </div>
        </header>

        <div className="movie-card__poster movie-card__poster--small">
          <img src={details.cover} alt={title} width="218" height="327" />
        </div>
      </div>

      <div className="add-review">
        <form action="#" className="add-review__form" ref={formRef} onSubmit={submitFormHandler}>
          <div className="rating">
            <div className="rating__stars">
              <input className="rating__input" id="star-1" type="radio" name="rating" value="1"/>
              <label className="rating__label" htmlFor="star-1">Rating 1</label>

              <input className="rating__input" id="star-2" type="radio" name="rating" value="2" />
              <label className="rating__label" htmlFor="star-2">Rating 2</label>

              <input className="rating__input" id="star-3" type="radio" name="rating" value="3" defaultChecked />
              <label className="rating__label" htmlFor="star-3">Rating 3</label>

              <input className="rating__input" id="star-4" type="radio" name="rating" value="4" />
              <label className="rating__label" htmlFor="star-4">Rating 4</label>

              <input className="rating__input" id="star-5" type="radio" name="rating" value="5" />
              <label className="rating__label" htmlFor="star-5">Rating 5</label>
            </div>
          </div>

          <div className="add-review__text">
            <textarea className="add-review__textarea" name="review-text" id="review-text" placeholder="Review text"></textarea>
            <div className="add-review__submit">
              <button className="add-review__btn" type="submit">Post</button>
            </div>

          </div>
        </form>
      </div>

    </section>
  );
};

NewReviewPage.propTypes = {
  userData: PropTypes.shape({
    id: PropTypes.number,
    email: PropTypes.string,
    name: PropTypes.string,
    avatar: PropTypes.string,
  }),
  allFilms: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    src: PropTypes.string.isRequired,
    details: PropTypes.object.isRequired,
  })).isRequired,
  sendNewReview: PropTypes.func.isRequired,
  match: PropTypes.object.isRequired,
  history: PropTypes.shape({
    goBack: PropTypes.func.isRequired,
  }).isRequired,
};

const mapStateToProps = (state) => {
  return {
    movieID: getMovieId(state),
    allFilms: getAllFilms(state),
    userData: getUserData(state),
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    sendNewReview(data, id) {
      return dispatch(userOperation.sendReview(data, id));
    }
  };
};

export {NewReviewPage};
export default connect(mapStateToProps, mapDispatchToProps)(NewReviewPage);

