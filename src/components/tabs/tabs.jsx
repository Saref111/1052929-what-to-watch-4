import React from "react";
import PropTypes from "prop-types";
import {GENRES, Tabs} from "../../const.js";
import {getActorsString, rateToString, formatDate, stringifyDate} from "../../helpers/helpers.js";

const Tabs = (props) => {
  const {page, info} = props;
  const {rate, votes, director, actors, description, time, genre, year, reviews} = info;
  let tab = null;


  switch (page) {
    case Tabs.OVERVIEW:
      tab = (
        <React.Fragment>
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
        </React.Fragment>
      );
      break;

    case Tabs.DETAILS:
      tab = (
        <div className="movie-card__text movie-card__row">
          <div className="movie-card__text-col">
            <p className="movie-card__details-item">
              <strong className="movie-card__details-name">Director</strong>
              <span className="movie-card__details-value">{director}</span>
            </p>
            <p className="movie-card__details-item">
              <strong className="movie-card__details-name">Starring</strong>
              <span className="movie-card__details-value">
                {actors.map((actor, i) => {
                  return (
                    <React.Fragment key={`${actor}${i}`}>
                      {`${actor}${i === actors.length - 1 ? `` : `, `}`} <br/>
                    </React.Fragment>
                  );
                })}
              </span>
            </p>
          </div>

          <div className="movie-card__text-col">
            <p className="movie-card__details-item">
              <strong className="movie-card__details-name">Run Time</strong>
              <span className="movie-card__details-value">{time}</span>
            </p>
            <p className="movie-card__details-item">
              <strong className="movie-card__details-name">Genre</strong>
              <span className="movie-card__details-value">{genre}</span>
            </p>
            <p className="movie-card__details-item">
              <strong className="movie-card__details-name">Released</strong>
              <span className="movie-card__details-value">{year}</span>
            </p>
          </div>
        </div>
      );
      break;
    case Tabs.REVIEWS:
      tab = (
        <div className="movie-card__reviews movie-card__row">
          <div className="movie-card__reviews-col">
            {reviews.map((review, i) => {
              const {name, text, date, rate: userRate} = review;

              return (
                <div key={`${name}-${i}`} className="review">
                  <blockquote className="review__quote">
                    <p className="review__text">{text}</p>

                    <footer className="review__details">
                      <cite className="review__author">{name}</cite>
                      <time className="review__date" dateTime={formatDate(date)}>{stringifyDate(date)}</time>
                    </footer>
                  </blockquote>

                  <div className="review__rating">{userRate}</div>
                </div>
              );
            })}
          </div>
        </div>
      );
      break;
  }

  return tab;
};

Tabs.propTypes = {
  page: PropTypes.number.isRequired,
  info: PropTypes.shape({
    bgPoster: PropTypes.string.isRequired,
    cover: PropTypes.string.isRequired,
    director: PropTypes.string.isRequired,
    genre: PropTypes.oneOf(GENRES).isRequired,
    year: PropTypes.number.isRequired,
    time: PropTypes.string.isRequired,
    rate: PropTypes.number.isRequired,
    votes: PropTypes.number.isRequired,
    actors: PropTypes.arrayOf(PropTypes.string),
    description: PropTypes.shape({
      prescription: PropTypes.string.isRequired,
      postscription: PropTypes.string.isRequired,
    }).isRequired,
    reviews: PropTypes.arrayOf(PropTypes.shape({
      name: PropTypes.string.isRequired,
      date: PropTypes.instanceOf(Date).isRequired,
      text: PropTypes.string.isRequired,
      rate: PropTypes.number.isRequired,
    })).isRequired,
  }),
};

export default Tabs;
