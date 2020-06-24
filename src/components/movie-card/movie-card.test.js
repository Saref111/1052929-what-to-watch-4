import React from "react";
import renderer from "react-test-renderer";
import MovieCard from "./movie-card.jsx";

describe(`Testing MovieCard component`, () => {
  test(`Snapshot test`, ()=> {
    const onCardHoverHandler = jest.fn();
    const onHeaderClickHandler = jest.fn();
    const tree = renderer.create(
        <MovieCard
          movie={{
            title: `title`,
            src: `src`,
          }}
          onCardHoverHandler={onCardHoverHandler}
          onHeaderClickHandler={onHeaderClickHandler}
        />
    );

    expect(tree).toMatchSnapshot();
  });
});
