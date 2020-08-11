import React from "react";
import renderer from "react-test-renderer";
import {SignIn} from "./sign-in.jsx";
import {BrowserRouter, Route} from "react-router-dom";

describe(`SignIn snapshot tests`, () => {
  test(`should match snapshot`, () => {
    const tree = renderer.create(<BrowserRouter><Route render={(props) => {
      return <SignIn
        {...props}
        submitAuthFormHandler={() => {}}
        setValidity={() => {}}
        isValid={true}
        isWrong={false}
        authorizationStatus={`NO_AUTH`}
      />;
    }}/></BrowserRouter>, {
      createNodeMock() {
        return {};
      }
    }).toJSON();

    expect(tree).toMatchSnapshot();
  });

  test(`should match snapshot when isn't valid`, () => {
    const tree = renderer.create(<BrowserRouter><Route render={(props) => {
      return <SignIn
        {...props}
        submitAuthFormHandler={() => {}}
        setValidity={() => {}}
        isValid={false}
        isWrong={false}
        authorizationStatus={`NO_AUTH`}
      />;
    }}/></BrowserRouter>, {
      createNodeMock() {
        return {};
      }
    }).toJSON();

    expect(tree).toMatchSnapshot();
  });

  test(`should match snapshot when is wrong`, () => {
    const tree = renderer.create(<BrowserRouter><Route render={(props) => {
      return <SignIn
        {...props}
        submitAuthFormHandler={() => {}}
        authorizationStatus={`NO_AUTH`}
        setValidity={() => {}}
        isValid={true}
        isWrong={true}
      />;
    }}/></BrowserRouter>, {
      createNodeMock() {
        return {};
      }
    }).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
