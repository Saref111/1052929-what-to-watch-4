import React from "react";
import {shallow} from "enzyme";
import TabsNav from "./tabs-nav.jsx";

const e = {
  preventDefault() {}
}

test(`Click on tab menu item shoud call the func once`, () => {
  const handleClick = jest.fn();
  const TabsNavElement = shallow(<TabsNav
    page={1}
    handleClick={handleClick}
  />);

  const buttons = TabsNavElement.find(`.movie-nav__link`)
  const button = buttons.first();
  button.simulate(`click`, e);

  expect(handleClick).toHaveBeenCalledTimes(1);
});
