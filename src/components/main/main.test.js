import React from "react";
import renderer from "react-test-renderer";
import Main from "./main.jsx";

const FILMS = [
  {
    title: `title`,
    src: `src`,
  },
  {
    title: `title`,
    src: `src`,
  },
  {
    title: `title`,
    src: `src`,
  },
  {
    title: `title`,
    src: `src`,
  },
  {
    title: `title`,
    src: `src`,
  },
  {
    title: `title`,
    src: `src`,
  },
  {
    title: `title`,
    src: `src`,
  },
  {
    title: `title`,
    src: `src`,
  },
  {
    title: `title`,
    src: `src`,
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
