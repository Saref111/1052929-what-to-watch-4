import React from "react";
import {shallow} from "enzyme";
import {SignIn} from "./sign-in.jsx";

describe(`SignIn e2e tests`, () => {
  test(`should call the cancelAuthorizationHandler once`, () => {
    const cancelAuthorizationHandler = jest.fn();

    const SignInElement = shallow(<SignIn
      submitAuthFormHandler={() => {}}
      cancelAuthorizationHandler={cancelAuthorizationHandler}
      setValidity={() => {}}
      isValid={true}
      isWrong={false}
    />);

    const logoLink = SignInElement.find(`.logo__link`);
    logoLink.simulate(`click`);

    expect(cancelAuthorizationHandler).toHaveBeenCalledTimes(1);
  });
});
