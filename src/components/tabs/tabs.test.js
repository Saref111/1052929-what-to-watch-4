import React from "react";
import renderer from "react-test-renderer";
import Tabs from "./tabs.jsx";

const details = {
  bgPoster: `BG_HREF`,
  cover: `POSTER_HREF`,
  genre: `comedy`,
  year: 2001,
  time: `1h 1m`,
  rate: 8.8,
  votes: 666,
  director: `Kevin Smith`,
  actors: [`actor1`, `actor2`],
  description: {
    prescription: `prescription`,
    postscription: `postscription`,
  },
  reviews: [{
    name: `Ivan Ivanov`,
    rate: 8.9,
    date: new Date(),
    text: `Lorem ipsum dolor sit amet. Eligendi non quis exercitationem culpa`,
  }],
};

test(`e2e tabs test`, () => {
  const TabsElement = renderer.create(<Tabs
    page={1}
    info={details}
  />).toJSON();

  expect(TabsElement).toMatchSnapshot();
});
