import React from "react";
import {shallow} from "enzyme";
import MovieCard from "./movie-card.jsx";

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

describe(`Test e2e MovieCard`, () => {
  test(`Click on header`, () => {
    const onCardHoverHandler = jest.fn();
    const onHeaderClickHandler = jest.fn();

    const MovieCardElement = shallow(
        <MovieCard
          movie={movie}
          onCardHoverHandler={onCardHoverHandler}
          onHeaderClickHandler={onHeaderClickHandler}
        />
    );

    const headerLink = MovieCardElement.find(`a.small-movie-card__link`);

    const evt = {
      preventDefault() {},
      target: {value: `the-value`},
    };

    headerLink.simulate(`click`, evt);

    expect(onHeaderClickHandler).toHaveBeenCalledTimes(1);
  });

  test(`MouseOver on Card`, () => {
    const onCardHoverHandler = jest.fn();
    const onHeaderClickHandler = jest.fn();

    const MovieCardElement = shallow(
        <MovieCard
          movie={movie}
          onCardHoverHandler={onCardHoverHandler}
          onHeaderClickHandler={onHeaderClickHandler}
        />
    );

    MovieCardElement.simulate(`mouseover`);

    expect(onCardHoverHandler).toHaveBeenCalledTimes(1);
    expect(onCardHoverHandler.mock.calls[0][0]).toMatchObject(movie);
  });
});
