import React from "react";
import {shallow} from "enzyme";
import MovieCard from "./movie-card.jsx";
import {DetailedMovieInfoTest} from "../detailed-movie-info/detailed-movie-info.jsx";

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
  id: 1,
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
          renderPlayer={() => {}}
          isVideo={false}
          handleMouseOut={() => {}}
          movie={movie}
          onCardHoverHandler={onCardHoverHandler}
          onHeaderClickHandler={onHeaderClickHandler}
        />, {
          createNodeMock: () => {
            return {};
          }
        }
    );

    const DetailedMovieInfoElement = shallow(
        <DetailedMovieInfoTest
          films={films}
          movieID={1}
          onHeaderClickHandler={onHeaderClickHandler}
        />, {
          createNodeMock: () => {
            return {};
          }
        }
    );

    const headerLink = MovieCardElement.dive().find(`.small-movie-card__link`);

    const evt = {
      preventDefault() {},
      target: {value: `the-value`},
    };

    headerLink.simulate(`click`, evt);

    expect(MovieCardElement.matchesElement(DetailedMovieInfoElement));
    expect(onHeaderClickHandler).toHaveBeenCalledTimes(1);
  });

});
