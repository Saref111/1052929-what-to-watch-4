import React from "react";
import renderer from "react-test-renderer";
import TabDetails from "./tab-details.jsx";

test(`Snapshot test for TabDetails`, () => {
  const tree = renderer.create(<TabDetails
    genre={`drama`}
    time={`1`}
    year={666}
    director={`qweerttyu`}
    actors={[`11111`, `222222`]}
  />);
  expect(tree).toMatchSnapshot();
});
