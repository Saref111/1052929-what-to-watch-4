import React from "react";
import PropTypes from "prop-types";
import {formatDate, stringifyDate} from "../../helpers/helpers.js";

const TabReviews = (props) => {
  const {comments} = props;
  console.log(comments);
  return (
    <div className="movie-card__reviews movie-card__row">
      <div className="movie-card__reviews-col">
        {comments.map((review, i) => {
          const {user, comment, date: stringDate, rating: userRate} = review;
          const date = new Date(stringDate);

          return (
            <div key={`${user.name}-${i}`} className="review">
              <blockquote className="review__quote">
                <p className="review__text">{comment}</p>

                <footer className="review__details">
                  <cite className="review__author">{user.name}</cite>
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
  comments: PropTypes.array.isRequired,
};


export default TabReviews;
