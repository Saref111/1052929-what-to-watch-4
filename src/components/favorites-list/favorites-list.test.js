import React from "react";
import renderer from "react-test-renderer";
import {FavoritesList} from "./favorites-list.jsx";
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
  {
    id: 0,
    title: `title`,
    src: `src`,
    preview: `preview`,
    details,
  },
];

test(`FavoritesList should match snapshot`, () => {
  const tree = renderer.create(
      <BrowserRouter>
        <Route render={(props) => {
          return <FavoritesList
            {...props}
            favorites={FILMS}
            onHeaderClickHandler={()=> {}}
            loadFavorites={()=> {}}
            userData={{}}
          />;
        }}/>
      </BrowserRouter>
  ).toJSON();

  expect(tree).toMatchSnapshot();
});
