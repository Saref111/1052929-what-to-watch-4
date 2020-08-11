import React from "react";
import renderer from "react-test-renderer";
import TabReviews from "./tab-reviews.jsx";

const reviews = [{
  name: `Ivan Ivanov`,
  rate: 8.9,
  date: new Date(),
  text: `Lorem ipsum dolor sit amet. Eligendi non quis exercitationem culpa`,
}];

const comments = [{
  user: {
    name: `111`
  },
  comment: `11111`,
  date: `11.12.1992`,
  rating: 8
}];

test(`Snapshot test for TabReviews`, () => {
  const tree = renderer.create(<TabReviews reviews={reviews} comments={comments}/>);

  expect(tree).toMatchSnapshot();
});
