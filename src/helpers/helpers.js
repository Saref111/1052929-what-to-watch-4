import {RATINGS, MONTHS} from "../const.js";

const formatDate = (date) => {
  return `${`${date.getFullYear()}`.slice(2, 4)}-${`${date.getMonth()}`.length === 2 ? date.getMonth() + 1 : `0${date.getMonth()}`}-${date.getDate()}`;
};

const stringifyDate = (date) => {
  return `${MONTHS[Number(date.getMonth())]} ${date.getDate()}, ${`${date.getFullYear()}`}`;
};

const uppercaseFirstLetter = (string) => `${string.charAt(0).toUpperCase()}${string.slice(1)}`;

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

const extend = (a, b) => Object.assign({}, a, b);

const stringifyCurrentTime = (current) => {
  return `${Math.floor(current / 60)} : ${current % 60 < 10 ? `0${current % 60}` : current % 60}`;
};

export {getActorsString, rateToString, uppercaseFirstLetter, formatDate, stringifyDate, extend, stringifyCurrentTime};
