import React from "react";
import renderer from "react-test-renderer";
import Main from "./main.jsx";

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

describe(`Test Main`, () => {
  it(`Main snapshot`, () => {
    const tree = renderer.create(
        <Main
          name={`The Benders`}
          genre={`Robcore`}
          year={3020}
          onHeaderClickHandler={() => {}}
          films={FILMS}
        />
    );

    expect(tree).toMatchSnapshot();
  });
});
