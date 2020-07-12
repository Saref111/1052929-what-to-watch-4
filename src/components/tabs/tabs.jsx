import React from "react";
import PropTypes from "prop-types";
import TabOverview from "../tab-overview/tab-overview.jsx";
import TabDetails from "../tab-details/tab-details.jsx";
import TabReviews from "../tab-reviews/tab-reviews.jsx";
import {GENRES, TABS} from "../../const.js";
import {getActorsString, rateToString} from "../../helpers/helpers.js";

const Tabs = (props) => {
  const {page, info} = props;
  const {rate, votes, director, actors, description, time, genre, year, reviews} = info;
  let tab = null;


  switch (page) {
    case TABS.OVERVIEW:
      tab = (
        <TabOverview
          rate={rate}
          votes={votes}
          description={description}
          rateString={rateToString(rate)}
          director={director}
          actors={getActorsString(actors)}
        />
      );
      break;

    case TABS.DETAILS:
      tab = (
        <TabDetails
          director={director}
          actors={actors}
          time={time}
          genre={genre}
          year={year}
        />
      );
      break;
    case TABS.REVIEWS:
      tab = (
        <TabReviews
          reviews={reviews}
        />
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
    actors: PropTypes.arrayOf(PropTypes.string).isRequired,
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
