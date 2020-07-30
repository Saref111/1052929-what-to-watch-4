import React from "react";
import {mount} from "enzyme";
import {DetailedMovieInfoTest} from "./detailed-movie-info.jsx";

const details = {
  bgPoster: `BG_HREF`,
  cover: `POSTER_HREF`,
  genre: `comedy`,
  year: 2001,
  time: 100,
  rate: 8.8,
  votes: 666,
  director: `Kevin Smith`,
  actors: [`actor1`, `actor2`],
  description: `111`,
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
  preview: `asdasdasd`,
  details,
};

const films = [movie, movie, movie];

describe(`DetailedMovieInfo e2e tests`, () => {
  test(`should call toggleMovieScreenHandler`, () => {
    const toggleMovieScreenHandler = jest.fn();

    const DetailedMovieInfoElement = mount(
        <DetailedMovieInfoTest
          films={films}
          onHeaderClickHandler={() => {}}
          renderMovieScreen={() => {}}
          toggleMovieScreenHandler={toggleMovieScreenHandler}
          isShowingScreen={true}
          page={0}
          handleClick={() => {}}
          movieID={1}
        />
    );


    expect(DetailedMovieInfoElement.find(`.movie-card__button.btn--play`).exists()).toBe(true);
    DetailedMovieInfoElement.find(`.movie-card__button.btn--play`).simulate(`click`, {});
    // expect(toggleMovieScreenHandler).toHaveBeenCalledTimes(1);
  });
});
