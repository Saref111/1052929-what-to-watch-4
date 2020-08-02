import React from "react";
import renderer from "react-test-renderer";
import {SignIn} from "./sign-in.jsx";

describe(`SignIn snapshot tests`, () => {
  test(`should match snapshot`, () => {
    const tree = renderer.create(<SignIn
      submitAuthFormHandler={() => {}}
      cancelAuthorizationHandler={() => {}}
      setValidity={() => {}}
      isValid={true}
      isWrong={false}
    />).toJSON();

    expect(tree).toMatchSnapshot();
  });

  test(`should match snapshot when isn't valid`, () => {
    const tree = renderer.create(<SignIn
      submitAuthFormHandler={() => {}}
      cancelAuthorizationHandler={() => {}}
      setValidity={() => {}}
      isValid={false}
      isWrong={false}
    />).toJSON();

    expect(tree).toMatchSnapshot();
  });

  test(`should match snapshot when is wrong`, () => {
    const tree = renderer.create(<SignIn
      submitAuthFormHandler={() => {}}
      cancelAuthorizationHandler={() => {}}
      setValidity={() => {}}
      isValid={true}
      isWrong={true}
    />).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
