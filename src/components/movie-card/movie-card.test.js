import React from "react";
import renderer from "react-test-renderer";
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

describe(`Testing MovieCard component`, () => {
  test(`Snapshot test`, ()=> {
    const onCardHoverHandler = jest.fn();
    const onHeaderClickHandler = jest.fn();
    const tree = renderer.create(
        <MovieCard
          movie={{
            id: 1,
            title: `title`,
            src: `src`,
            preview: `preview`,
            details,
          }}
          onCardHoverHandler={onCardHoverHandler}
          onHeaderClickHandler={onHeaderClickHandler}
        />
    );

    expect(tree).toMatchSnapshot();
  });
});
