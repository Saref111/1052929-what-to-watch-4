import React from "react";
import renderer from "react-test-renderer";
import DetailedMovieInfo from "./detailed-movie-info.jsx";

const details = {
  bgPoster: `BG_HREF`,
  cover: `POSTER_HREF`,
  genre: `comedy`,
  year: 2001,
  rate: 8.8,
  votes: 666,
  director: `Kevin Smith`,
  actors: [`actor1`, `actor2`],
  description: {
    prescription: `prescription`,
    postscription: `postscription`,
  },
};

const movie = {
  id: 0,
  title: `title`,
  src: `src`,
  details,
};

describe(`Test DetailedMovieInfo`, () => {
  it(`DetailedMovieInfo snapshot`, () => {
    const tree = renderer.create(
        <DetailedMovieInfo
          movie={movie}
        />
    );

    expect(tree).toMatchSnapshot();
  });
});
