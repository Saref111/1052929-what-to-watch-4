import React from "react";
import renderer from "react-test-renderer";
import TabOverview from "./tab-overview.jsx";

test(`Snapshot test for TabOverview`, () => {
  const tree = renderer.create(<TabOverview
    rate={2}
    rateString={`2`}
    votes={222}
    description={`11111`}
    director={`qweerttyu`}
    actors={`sdfghjk sdfsdf sdfsdf sdfsdfsdf`}
  />);

  expect(tree).toMatchSnapshot();
});
