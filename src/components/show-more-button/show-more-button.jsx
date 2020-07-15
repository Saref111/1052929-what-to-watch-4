import React from "react";
import PropTypes from "prop-types";

const ShowMoreButton = (props) => {
  const {isShown, onShowMoreButtonClickHandler} = props;

  return isShown ? (
    <div className="catalog__more">
      <button onClick={onShowMoreButtonClickHandler} className="catalog__button" type="button">Show more</button>
    </div>
  ) : ``;
};

ShowMoreButton.propTypes = {
  isShown: PropTypes.bool.isRequired,
  onShowMoreButtonClickHandler: PropTypes.func.isRequired,
};

export default ShowMoreButton;
