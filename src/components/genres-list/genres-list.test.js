import React from "react";
import renderer from "react-test-renderer";
import GenresList from "./genres-list.jsx";

const genresList = [`1`, `2`, `3`, `4`];

test(`Snapshot GenreList`, () => {
  const tree = renderer.create(<GenresList
    genresList={genresList}
    currentGenre={`1`}
    onFilterChangeHandler={() => {}}
    films={[]}
  />).toJSON();

  expect(tree).toMatchSnapshot();
});


