import React from "react";
import PropTypes from "prop-types";

const TabOverview = (props) => {
  const {rate, rateString, votes, description, director, actors} = props;

  return (
    <React.Fragment>
      <div className="movie-rating">
        <div className="movie-rating__score">{`${rate}`}</div>
        <p className="movie-rating__meta">
          <span className="movie-rating__level">{`${rateString}`}</span>
          <span className="movie-rating__count">{`${votes}`} ratings</span>
        </p>
      </div>

      <div className="movie-card__text">
        <p>{`${description.prescription}`}</p>

        <p>{`${description.postscription}`}</p>

        <p className="movie-card__director"><strong>Director: {`${director}`}</strong></p>

        <p className="movie-card__starring"><strong>Starring: {`${actors}`} and other.</strong></p>
      </div>
    </React.Fragment>
  );
};

TabOverview.propTypes = {
  rate: PropTypes.number.isRequired,
  rateString: PropTypes.string.isRequired,
  votes: PropTypes.number.isRequired,
  description: PropTypes.shape({
    prescription: PropTypes.string.isRequired,
    postscription: PropTypes.string.isRequired,
  }).isRequired,
  director: PropTypes.string.isRequired,
  actors: PropTypes.string.isRequired,
};

export default TabOverview;

