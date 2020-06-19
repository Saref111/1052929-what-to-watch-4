import React from "react";
import renderer from "react-test-renderer";
import FilmsList from "./films-list.jsx";

const FILMS = [
  {
    title: `title`,
    src: `src`,
  },
  {
    title: `title`,
    src: `src`,
  },
  {
    title: `title`,
    src: `src`,
  },
  {
    title: `title`,
    src: `src`,
  },
  {
    title: `title`,
    src: `src`,
  },
  {
    title: `title`,
    src: `src`,
  },
  {
    title: `title`,
    src: `src`,
  },
  {
    title: `title`,
    src: `src`,
  },
  {
    title: `title`,
    src: `src`,
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
