import React, {PureComponent} from "react";
import PropTypes from "prop-types";
import {GENRES, RATINGS} from "../../const.js";

const uppercaseFirstLetter = (string) => `${string.slice(0, 1).toUpperCase()}${string.slice(1, string.length)}`;

const rateToString = (rate) => {
  let rating = ``;

  switch (Math.round(rate)) {
    case 0:
    case 1:
    case 2:
      rating = RATINGS[0];
      break;
    case 3:
    case 4:
      rating = RATINGS[1];
      break;
    case 5:
    case 6:
    case 7:
      rating = RATINGS[2];
      break;
    case 8:
    case 9:
      rating = RATINGS[3];
      break;
    case 10:
      rating = RATINGS[4];
      break;
    default:
      rating = `something is going wrong with this rating=(`;
  }

  return uppercaseFirstLetter(rating);
};

const getActorsString = (array) => {
  return array.reduce((acc, it, i) => {
    if (i === array.length - 1) {
      return `${acc}${it}`;
    }

    return `${acc}${it}, `;
  }, ``);
};

class DetailedMovieInfo extends PureComponent {
  constructor(props) {
    super(props);
  }
  render() {
    const {movie} = this.props;
    const {title, details} = movie;
    const {bgPoster, cover, genre, year, rate, votes, director, actors, description} = details;
    return (
      <section className="movie-card movie-card--full">
        <div className="movie-card__hero">
          <div className="movie-card__bg">
            <img src={`${bgPoster}${title}`} alt={`${title}`} />
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
                <span className="movie-card__genre">{`${uppercaseFirstLetter(genre)}`}</span>
                <span className="movie-card__year">{`${year}`}</span>
              </p>

              <div className="movie-card__buttons">
                <button className="btn btn--play movie-card__button" type="button">
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
              <img src={`${cover}${title}`} alt={`${title}`} width="218" height="327" />
            </div>

            <div className="movie-card__desc">
              <nav className="movie-nav movie-card__nav">
                <ul className="movie-nav__list">
                  <li className="movie-nav__item movie-nav__item--active">
                    <a href="#" className="movie-nav__link">Overview</a>
                  </li>
                  <li className="movie-nav__item">
                    <a href="#" className="movie-nav__link">Details</a>
                  </li>
                  <li className="movie-nav__item">
                    <a href="#" className="movie-nav__link">Reviews</a>
                  </li>
                </ul>
              </nav>

              <div className="movie-rating">
                <div className="movie-rating__score">{`${rate}`}</div>
                <p className="movie-rating__meta">
                  <span className="movie-rating__level">{rateToString(rate)}</span>
                  <span className="movie-rating__count">{`${votes}`} ratings</span>
                </p>
              </div>

              <div className="movie-card__text">
                <p>{`${description.prescription}`}</p>

                <p>{`${description.postscription}`}</p>

                <p className="movie-card__director"><strong>Director: {`${director}`}</strong></p>

                <p className="movie-card__starring"><strong>Starring: {`${getActorsString(actors)}`} and other.</strong></p>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

DetailedMovieInfo.propTypes = {
  movie: PropTypes.shape({
    title: PropTypes.string.isRequired,
    src: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired,
    details: PropTypes.shape({
      bgPoster: PropTypes.string.isRequired,
      cover: PropTypes.string.isRequired,
      director: PropTypes.string.isRequired,
      genre: PropTypes.oneOf(GENRES).isRequired,
      year: PropTypes.number.isRequired,
      rate: PropTypes.number.isRequired,
      votes: PropTypes.number.isRequired,
      actors: PropTypes.arrayOf(PropTypes.string),
      description: PropTypes.shape({
        prescription: PropTypes.string.isRequired,
        postscription: PropTypes.string.isRequired,
      }).isRequired,
    }),
  }),
};

export default DetailedMovieInfo;
