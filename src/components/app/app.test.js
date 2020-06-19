import React from "react";
import renderer from "react-test-renderer";
import App from "./app.jsx";

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

describe(`Test App`, () => {
  it(`App snapshot`, () => {
    const tree = renderer.create(
        <App
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
