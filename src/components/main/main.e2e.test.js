import React from "react";
import Enzyme, {shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import Main from "./main.jsx";

Enzyme.configure({
  adapter: new Adapter()
});

describe(`Main e2e test`, () => {
  it(`Check click on headers`, () => {
    const headerClickHandler = jest.fn();

    const MainElement = shallow(
        <Main
          name={`The Benders`}
          genre={`Robcore`}
          year={3020}
          headerClickHandler={headerClickHandler}
        />
    );

    const headers = MainElement.find(`h3.small-movie-card__title`);

    headers.forEach((it) => {
      it.simulate(`click`);

    });

    expect(headerClickHandler.mock.calls.length).toBe(headers.length);
  });
});
