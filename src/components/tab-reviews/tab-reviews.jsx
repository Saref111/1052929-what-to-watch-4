import React from "react";
import PropTypes from "prop-types";
import {formatDate, stringifyDate} from "../../helpers/helpers.js";

const TabReviews = (props) => {
  const {reviews} = props;

  return (
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
};

TabReviews.propTypes = {
  reviews: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired,
    date: PropTypes.instanceOf(Date).isRequired,
    text: PropTypes.string.isRequired,
    rate: PropTypes.number.isRequired,
  })).isRequired,
};


export default TabReviews;
