import React from "react";
import renderer from "react-test-renderer";
import PrivateRoute from "./private-route.jsx";
import NewReviewPage from "../new-review-page/new-review-page.jsx";
import {Routes} from "../../const.js";
import {Provider} from "react-redux";
import configureStore from "redux-mock-store";
import {BrowserRouter} from "react-router-dom";

const mockStore = configureStore([]);

describe(`PrivateRoute snaptest`, () => {
  test(`shouldn't render NewReviewPage`, () => {
    const store = mockStore({DATA: {
    },
    MOVIE: {
    },
    USER: {
      authorizationStatus: `NO_AUTH`,
      isSigningIn: false
    }});
    const tree = renderer.create(<Provider store={store}><BrowserRouter><PrivateRoute exact path={Routes.REVIEW}
      render={(props) => {
        return <NewReviewPage {...props}/>;
      }}
    /></BrowserRouter></Provider>).toJSON();

    expect(tree).toMatchSnapshot();
  });

  test(`should render NewReviewPage`, () => {
    const store = mockStore({DATA: {
    },
    MOVIE: {
    },
    USER: {
      authorizationStatus: `AUTH`,
      isSigningIn: false
    }});
    const tree = renderer.create(<Provider store={store}><BrowserRouter><PrivateRoute exact path={Routes.REVIEW}
      render={(props) => {
        return <NewReviewPage {...props}/>;
      }}
    /></BrowserRouter></Provider>).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
