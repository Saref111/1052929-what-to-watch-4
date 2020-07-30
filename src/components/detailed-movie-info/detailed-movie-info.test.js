import React from "react";
import renderer from "react-test-renderer";
import {DetailedMovieInfoTest} from "./detailed-movie-info.jsx";

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
  description: `11111`,
};

const movie = {
  id: 1,
  title: `title`,
  src: `src`,
  preview: `asdasdasd`,
  details,
};

const films = [movie, movie, movie, movie];

describe(`Test DetailedMovieInfo`, () => {
  it(`DetailedMovieInfo snapshot`, () => {
    const tree = renderer.create(
        <DetailedMovieInfoTest
          films={films}
          movieID={1}
          onHeaderClickHandler={() => {}}
        />
    );

    expect(tree).toMatchSnapshot();
  });
});
