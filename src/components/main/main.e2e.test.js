import React from "react";
import {shallow} from "enzyme";
import Main from "./main.jsx";

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

describe(`Main e2e test`, () => {
  it(`Check click on headers`, () => {
    const onHeaderClickHandler = jest.fn();

    const MainElement = shallow(
        <Main
          onFilterChangeHandler={() => {}}
          filterGenre={`1`}
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
