import React from "react";
import renderer from "react-test-renderer";
import SameGenreMovies from "./same-genre-movies.jsx";

const details = {
  bgPoster: `BG_HREF`,
  cover: `POSTER_HREF`,
  genre: `comedy`,
  year: 2001,
  rate: 8.8,
  time: `1h 1m`,
  votes: 666,
  director: `Kevin Smith`,
  actors: [`actor1`, `actor2`],
  description: {
    prescription: `prescription`,
    postscription: `postscription`,
  },
  reviews: [{
    name: `Ivan Ivanov`,
    rate: 8.9,
    date: new Date(),
    text: `Lorem ipsum dolor sit amet. Eligendi non quis exercitationem culpa`,
  }],
};

const movie = {
  id: 0,
  title: `title`,
  src: `src`,
  preview: `preview`,
  details,
};

const films = [movie, movie, movie, movie];

test(`Snapshot SameGenreMovies`, () => {
  const tree = renderer.create(<SameGenreMovies
    films={films}
    genre={`comedy`}
    onHeaderClickHandler={() => {}}
    onCardHoverHandler={() => {}}
  />);

  expect(tree).toMatchSnapshot();
});
