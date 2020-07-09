import React from "react";
import PropTypes from "prop-types";
import {CARD_MENU} from "../../const.js";

const TabsNav = (props) => {
  const {page, handleClick} = props;

  return (
    <nav className="movie-nav movie-card__nav">
      <ul className="movie-nav__list">
        {CARD_MENU.map((name, i) => {
          return (
            <li key={`${name}`} className={`movie-nav__item ${page === i ? `movie-nav__item--active` : ``}`}>
              <a href="" className="movie-nav__link" onClick={(e) => {
                e.preventDefault();
                handleClick(i);
              }} id={i}>{name}</a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

TabsNav.propTypes = {
  page: PropTypes.number.isRequired,
  handleClick: PropTypes.func.isRequired,
};

export default TabsNav;
