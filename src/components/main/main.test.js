import React from "react";
import renderer from "react-test-renderer";
import Main from "./main.jsx";

describe(`Test Main`, () => {
  it(`Main snapshot`, () => {
    const tree = renderer.create(
        <Main
          name={`The Benders`}
          genre={`Robcore`}
          year={3020}
          headerClickHandler={() => {}}
        />
    );

    expect(tree).toMatchSnapshot();
  });
});
