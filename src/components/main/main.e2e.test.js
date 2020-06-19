import React from "react";
import {shallow} from "enzyme";
import Main from "./main.jsx";

describe(`Main e2e test`, () => {
  it(`Check click on headers`, () => {
    const onHeaderClickHandler = jest.fn();

    const MainElement = shallow(
        <Main
          name={`The Benders`}
          genre={`Robcore`}
          year={3020}
          onHeaderClickHandler={onHeaderClickHandler}
        />
    );

    const headers = MainElement.find(`h3.small-movie-card__title`);

    headers.forEach((it) => {
      it.simulate(`click`);

    });

    expect(onHeaderClickHandler.mock.calls.length).toBe(headers.length);
  });
});
