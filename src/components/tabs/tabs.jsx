import React from "react";
import PropTypes from "prop-types";
import {CARD_MENU, GENRES} from "../../const.js";
import {getActorsString, rateToString} from "../../helpers/helpers.js";

const Tabs = (props) => {
  const {page, info} = props;
  const {rate, votes, director, actors, description} = info;

  return (
    <div className="movie-card__desc">
      <nav className="movie-nav movie-card__nav">
        <ul className="movie-nav__list">
          {CARD_MENU.map((name, i) => {
            return (
              <li key={`${name}-${i}`} className={`movie-nav__item ${page === i ? `movie-nav__item--active` : ``}`}>
                <a href="#" className="movie-nav__link">{name}</a>
              </li>
            );
          })}
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

  );
};

Tabs.propTypes = {
  page: PropTypes.number.isRequired,
  info: PropTypes.shape({
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
};

export default Tabs;
