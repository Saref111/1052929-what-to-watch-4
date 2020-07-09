import React from "react";
import renderer from "react-test-renderer";
import TabOverview from "./tab-overview.jsx";

test(`Snapshot test for TabOverview`, () => {
  const tree = renderer.create(<TabOverview
    rate={2}
    rateString={`2`}
    votes={222}
    description={{
      prescription: `123qweasdxcv`,
      postscription: `123qweasdxcv`
    }}
    director={`qweerttyu`}
    actors={`sdfghjk sdfsdf sdfsdf sdfsdfsdf`}
  />);

  expect(tree).toMatchSnapshot();
});
