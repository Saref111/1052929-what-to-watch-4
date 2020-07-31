import React from "react";
import {shallow} from "enzyme";
import {MainTest} from "./main.jsx";

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

const promo = {
  id: 20,
  title: `Appleman`,
  src: `http://dummyimage.com/280x175/D76E00&text=`,
  preview: `https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4`,
  details: {
    bgPoster: `http://dummyimage.com/1300/D76E00&text=`,
    cover: `http://dummyimage.com/218x327&text=`,
    genre: `crime`,
    year: 2001,
    rate: 8.8,
    votes: 666,
    time: 99,
    director: `Kevin Smith`,
  },
};

describe(`Main e2e test`, () => {
  it(`Check click on headers`, () => {
    const onHeaderClickHandler = jest.fn();

    const MainElement = shallow(
        <MainTest
          onFilterChangeHandler={() => {}}
          filterGenre={`1`}
          promo={promo}
          onHeaderClickHandler={onHeaderClickHandler}
          films={FILMS}
          allFilms={FILMS}
        />
    );

    const headers = MainElement.find(`h3.small-movie-card__title`);

    headers.forEach((it) => {
      it.simulate(`click`);
    });

    expect(onHeaderClickHandler.mock.calls.length).toBe(headers.length);
  });
});
