import React from "react";
import renderer from "react-test-renderer";
import TabsNav from "./tabs-nav.jsx";

test(`Snapshot test for TabsNav`, () => {
  const tree = renderer.create(<TabsNav page={1} handleClick={() => {}} />);

  expect(tree).toMatchSnapshot();
});
