import React from "react";
import renderer from "react-test-renderer";
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
  description: `11111`,
};

const movie = {
  id: 1,
  title: `title`,
  src: `src`,
  preview: `asdasdasd`,
  details,
};

const films = [movie, movie, movie, movie];

const comments = [{
  user: {
    name: `111`
  },
  comment: `11111`,
  date: `11.12.1992`,
  rating: 8
}];

describe(`Test DetailedMovieInfo`, () => {
  it(`DetailedMovieInfo snapshot`, () => {
    const tree = renderer.create(<BrowserRouter><Route render={(props) => {
      return <DetailedMovieInfoTest
        {...props}
        films={films}
        movieID={1}
        onHeaderClickHandler={() => {}}
        comments={comments}
        toggleFavorite={() => {}}
        userData={{}}
        loadComments={() => {}}
        startAuthorizationHandler={() => {}}
        authorizationStatus={`NO_AUTH`}
        match={{
          params: {
            id: 1,
          },
          url: `1`,
        }}
      />;
    }}/></BrowserRouter>, {
      createNodeMock() {
        return {};
      }
    }).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
