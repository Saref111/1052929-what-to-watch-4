import React from "react";
import {mount, shallow} from "enzyme";
import {DetailedMovieInfoTest} from "./detailed-movie-info.jsx";
import {BrowserRouter, Route} from "react-router-dom";

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

const comments = [{
  user: {
    name: `111`
  },
  comment: `11111`,
  date: `11.12.1992`,
  rating: 8
}];

const films = [movie, movie, movie];

describe(`DetailedMovieInfo e2e tests`, () => {
  test(`should call toggleMovieScreenHandler`, () => {
    const toggleMovieScreenHandler = jest.fn();

    const DetailedMovieInfoElement = mount(<BrowserRouter><Route render={(props) => {
      return <DetailedMovieInfoTest
        {...props}
        films={films}
        onHeaderClickHandler={() => {}}
        renderMovieScreen={() => {}}
        toggleMovieScreenHandler={toggleMovieScreenHandler}
        isShowingScreen={false}
        toggleFavorite={() => {}}
        userData={{}}
        loadComments={() => {}}
        startAuthorizationHandler={() => {}}
        authorizationStatus={`NO_AUTH`}
        page={0}
        handleClick={() => {}}
        movieID={1}
        comments={comments}
        match={{
          url: `mencfnfnfnf`,
          params: {
            id: 1,
          }
        }}
      />;
    }}/></BrowserRouter>, {
      createNodeMock: () => {
        return {};
      }
    });

    expect(DetailedMovieInfoElement.find(`a.btn--play`).exists()).toBe(true);

    expect(toggleMovieScreenHandler).toHaveBeenCalledTimes(0);
  });
});
