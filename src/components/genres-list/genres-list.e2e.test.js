import React from "react";
import {shallow} from "enzyme";
import GenresList from "./genres-list.jsx";

const genresList = [`1`, `2`, `3`, `4`];

const e = {
  preventDefault() {}
};

test(`Genres List click should call func once`, () => {
  const onFilterChange = jest.fn();

  const genresListElement = shallow(<GenresList
    genresList={genresList}
    currentGenre={`1`}
    onFilterChangeHandler={onFilterChange}
    films={[]}
  />);

  const links = genresListElement.find(`.catalog__genres-link`);
  links.forEach((it) => it.simulate(`click`, e));

  expect(onFilterChange.mock.calls.length).toBe(links.length);
});
