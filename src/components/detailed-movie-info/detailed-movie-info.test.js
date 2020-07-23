import React from "react";
import renderer from "react-test-renderer";
import DetailedMovieInfo from "./detailed-movie-info.jsx";
import SameGenreMovies from "../same-genre-movies/same-genre-movies.jsx";

const details = {
  bgPoster: `BG_HREF`,
  cover: `POSTER_HREF`,
  genre: `comedy`,
  year: 2001,
  time: 100,
  rate: 8.8,
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
  preview: `asdasdasd`,
  details,
};

const films = [movie, movie, movie, movie];

describe(`Test DetailedMovieInfo`, () => {
  it(`DetailedMovieInfo snapshot`, () => {
    const tree = renderer.create(
        <DetailedMovieInfo
          movie={movie}
        >
          <SameGenreMovies films={films} genre={`comedy`} onHeaderClickHandler={() => {}} onCardHoverHandler={() => {}} />
        </DetailedMovieInfo>
    );

    expect(tree).toMatchSnapshot();
  });
});
