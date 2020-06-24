import React from "react";
import {shallow} from "enzyme";
import MovieCard from "./movie-card.jsx";

const movie = {
  title: `title`,
  src: `src`,
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

    headerLink.simulate(`click`);

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
