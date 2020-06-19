import React from "react";
import renderer from "react-test-renderer";
import App from "./app.jsx";

describe(`Test App`, () => {
  it(`App snapshot`, () => {
    const tree = renderer.create(
        <App
          name={`The Benders`}
          genre={`Robcore`}
          year={3020}
          onHeaderClickHandler={() => {}}
        />
    );

    expect(tree).toMatchSnapshot();
  });
});
