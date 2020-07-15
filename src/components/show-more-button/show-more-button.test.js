import React from "react";
import renderer from "react-test-renderer";
import ShowMoreButton from "./show-more-button.jsx";

describe(`ShowMoreButton should match snapshots`, () => {
  test(`ShowMoreButton should render`, () => {
    const tree = renderer.create(<ShowMoreButton
      onShowMoreButtonClickHandler={() => {}}
      isShown={true}
    />);

    expect(tree).toMatchSnapshot();
  });

  test(`ShowMoreButton shouldn't render`, () => {
    const tree = renderer.create(<ShowMoreButton
      onShowMoreButtonClickHandler={() => {}}
      isShown={false}
    />);

    expect(tree).toMatchSnapshot();
  });
});

