import React from "react";
import PropTypes from "prop-types";
import {GENRES} from "../../const.js";
import {getActorsString, rateToString} from "../../helpers/helpers.js";

const Tabs = (props) => {
  const {page, info} = props;
  const {rate, votes, director, actors, description, time, genre, year} = info;
  let tab = null;

  switch (page) {
    case 0:
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

    case 1:
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
    case 2:
      tab = (<h1/>);
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
  }),
};

export default Tabs;
