import React from "react";
import {shallow} from "enzyme";
import Main from "./main.jsx";

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

describe(`Main e2e test`, () => {
  it(`Check click on headers`, () => {
    const onHeaderClickHandler = jest.fn();

    const MainElement = shallow(
        <Main
          name={`The Benders`}
          genre={`Robcore`}
          year={3020}
          onHeaderClickHandler={onHeaderClickHandler}
          films={FILMS}
        />
    );

    const headers = MainElement.find(`h3.small-movie-card__title`);

    headers.forEach((it) => {
      it.simulate(`click`);
    });

    expect(onHeaderClickHandler.mock.calls.length).toBe(headers.length);
  });
});
