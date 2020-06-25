import React from "react";
import renderer from "react-test-renderer";
import FilmsList from "./films-list.jsx";

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

const FILMS = [
  {
    id: 0,
    title: `title`,
    src: `src`,
    details,
  },
  {
    id: 0,
    title: `title`,
    src: `src`,
    details,
  },
  {
    id: 0,
    title: `title`,
    src: `src`,
    details,
  },
  {
    id: 0,
    title: `title`,
    src: `src`,
    details,
  },
  {
    id: 0,
    title: `title`,
    src: `src`,
    details,
  },
  {
    id: 0,
    title: `title`,
    src: `src`,
    details,
  },
  {
    id: 0,
    title: `title`,
    src: `src`,
    details,
  },
  {
    id: 0,
    title: `title`,
    src: `src`,
    details,
  },
  {
    id: 0,
    title: `title`,
    src: `src`,
    details,
  },
];

describe(`Testing FilmsList component`, () => {
  test(`Snapshot test`, () => {
    const onHeaderClickHandler = jest.fn();
    const tree = renderer.create(
        <FilmsList
          films={FILMS}
          onHeaderClickHandler={onHeaderClickHandler}
        />
    );

    expect(tree).toMatchSnapshot();
  });
});
