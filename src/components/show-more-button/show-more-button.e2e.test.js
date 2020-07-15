import React from "react";
import {shallow} from "enzyme";
import ShowMoreButton from "./show-more-button.jsx";

test(`ShowMoreButton should be clicked`, () => {
  const onClick = jest.fn();
  const ShowMoreButtonElement = shallow(<ShowMoreButton
    onShowMoreButtonClickHandler={onClick}
    isShown={true}
  />);

  ShowMoreButtonElement.find(`button`).simulate(`click`, {});

  expect(onClick).toHaveBeenCalledTimes(1);
});
