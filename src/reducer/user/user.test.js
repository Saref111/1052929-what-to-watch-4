import {actionCreator, reducer} from "./user.js";

const state = {
  authorizationStatus: `NO_AUTH`,
  isValid: true,
  isWrong: false,
  isSigningIn: false,
  userData: {},
};

it(`should set auth status`, () => {
  expect(reducer(state, actionCreator.requiredAuthorization(`AUTH`))).toStrictEqual({
    authorizationStatus: `AUTH`,
    isValid: true,
    isWrong: false,
    isSigningIn: false,
    userData: {},
  });
});

it(`should change isValid`, () => {
  expect(reducer(state, actionCreator.setValidityStatus(false))).toStrictEqual({
    authorizationStatus: `NO_AUTH`,
    isValid: false,
    isWrong: false,
    isSigningIn: false,
    userData: {},
  });
});

it(`should change isWrong`, () => {
  expect(reducer(state, actionCreator.setIsWrongStatus(true))).toStrictEqual({
    authorizationStatus: `NO_AUTH`,
    isValid: true,
    isWrong: true,
    isSigningIn: false,
    userData: {},
  });
});

it(`should change isSigningIn`, () => {
  expect(reducer(state, actionCreator.setSigningInStatus(true))).toStrictEqual({
    authorizationStatus: `NO_AUTH`,
    isValid: true,
    isWrong: false,
    isSigningIn: true,
    userData: {},
  });
});

it(`should set userData`, () => {
  // eslint-disable-next-line camelcase
  const data = {email: `111`, password: `111`, avatar_url: `111`};
  expect(reducer(state, actionCreator.setUserData(data))).toStrictEqual({
    authorizationStatus: `NO_AUTH`,
    isValid: true,
    isWrong: false,
    isSigningIn: false,
    userData: {email: `111`, password: `111`, avatar: `111`},
  });
});
