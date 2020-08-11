import React from "react";
import renderer from "react-test-renderer";
import {NewReviewPage} from "./new-review-page.jsx";
import {BrowserRouter, Route} from "react-router-dom";

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
    id: 1,
    title: `title`,
    src: `src`,
    preview: `preview`,
    details,
  },
  {
    id: 0,
    title: `title`,
    src: `src`,
    preview: `preview`,
    details,
  },
  {
    id: 0,
    title: `title`,
    src: `src`,
    preview: `preview`,
    details,
  },
  {
    id: 0,
    title: `title`,
    src: `src`,
    preview: `preview`,
    details,
  },
  {
    id: 0,
    title: `title`,
    src: `src`,
    preview: `preview`,
    details,
  },
  {
    id: 0,
    title: `title`,
    src: `src`,
    preview: `preview`,
    details,
  },
  {
    id: 0,
    title: `title`,
    src: `src`,
    preview: `preview`,
    details,
  },
  {
    id: 0,
    title: `title`,
    src: `src`,
    preview: `preview`,
    details,
  },
  {
    id: 0,
    title: `title`,
    src: `src`,
    preview: `preview`,
    details,
  },
];

test(`NewReviewPage Snapshot`, () => {
  const tree = renderer.create(<BrowserRouter><Route render={(props) => {
    return <NewReviewPage
      {...props}
      userData={{
        id: 1,
        email: `1111`,
        name: `1111`,
        avatar: `1111`,
      }}
      allFilms={FILMS}
      movieID={1}
      sendNewReview={() => {}}
      match={{params: {
        id: 1
      }}}
    />;
  }}/></BrowserRouter>).toJSON();

  expect(tree).toMatchSnapshot();
});
