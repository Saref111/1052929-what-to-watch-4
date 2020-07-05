import React from "react";
import {shallow} from "enzyme";
import MovieCard from "./movie-card.jsx";
import DetailedMovieInfo from "../detailed-movie-info/detailed-movie-info.jsx";
import SameGenreMovies from "../same-genre-movies/same-genre-movies.jsx";

const details = {
  bgPoster: `BG_HREF`,
  cover: `POSTER_HREF`,
  genre: `comedy`,
  year: 2001,
  rate: 8.8,
  time: `1h 1m`,
  votes: 666,
  director: `Kevin Smith`,
  actors: [`actor1`, `actor2`],
  description: {
    prescription: `prescription`,
    postscription: `postscription`,
  },
  reviews: [{
    name: `Ivan Ivanov`,
    rate: 8.9,
    date: new Date(),
    text: `Lorem ipsum dolor sit amet. Eligendi non quis exercitationem culpa`,
  }],
};

const movie = {
  id: 0,
  title: `title`,
  src: `src`,
  preview: `preview`,
  details,
};

const films = [movie, movie, movie, movie];

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

    const DetailedMovieInfoElement = shallow(
        <DetailedMovieInfo
          movie={movie}
        >
          <SameGenreMovies films={films} genre={`comedy`} onHeaderClickHandler={() => {}} onCardHoverHandler={() => {}} />
        </DetailedMovieInfo>
    );

    const headerLink = MovieCardElement.find(`a.small-movie-card__link`);

    const evt = {
      preventDefault() {},
      target: {value: `the-value`},
      createNodeMock: () => {
        return {};
      }
    };

    headerLink.simulate(`click`, evt);

    expect(MovieCardElement.matchesElement(DetailedMovieInfoElement));
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
