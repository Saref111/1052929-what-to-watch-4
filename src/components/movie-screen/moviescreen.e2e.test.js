import React from "react";
import {shallow} from "enzyme";
import MovieScreen from "./movie-screen.jsx";

describe(`e2e tests for MovieScreen`, () => {
  test(`should call toggleFullScreenHandler func twice`, () => {
    const toggleFullScreen = jest.fn();

    const MovieScreenElement = shallow(
        <MovieScreen
          getProgress={() => {}}
          toggleFullScreen={toggleFullScreen}
          handlePlayPause={() => {}}
          toggleMovieScreenHandler={() => {}}
          currentPosition={44}
          isFullscreen={false}
          isPlaying={true}
          movieLength={100}
          movieSrc={`111111`}
          poster={`12345`}
        />
    );

    MovieScreenElement.find(`.player__full-screen`).simulate(`click`);
    MovieScreenElement.find(`.player__full-screen`).simulate(`click`);
    expect(toggleFullScreen).toHaveBeenCalledTimes(2);
  });

  test(`should call handlePlayPause func twice`, () => {
    const handlePlayPause = jest.fn();

    const MovieScreenElement = shallow(
        <MovieScreen
          getProgress={() => {}}
          toggleFullScreen={()=> {}}
          handlePlayPause={handlePlayPause}
          toggleMovieScreenHandler={() => {}}
          currentPosition={44}
          isFullscreen={false}
          isPlaying={true}
          movieLength={100}
          movieSrc={`111111`}
          poster={`12345`}
        />
    );

    MovieScreenElement.find(`.player__play`).simulate(`click`);
    MovieScreenElement.find(`.player__play`).simulate(`click`);
    expect(handlePlayPause).toHaveBeenCalledTimes(2);
  });

  test(`should call toggleMovieScreenHandler`, () => {
    const toggleMovieScreenHandler = jest.fn();

    const MovieScreenElement = shallow(
        <MovieScreen
          getProgress={() => {}}
          toggleFullScreen={()=> {}}
          handlePlayPause={() => {}}
          toggleMovieScreenHandler={toggleMovieScreenHandler}
          currentPosition={44}
          isFullscreen={false}
          isPlaying={true}
          movieLength={100}
          movieSrc={`111111`}
          poster={`12345`}
        />
    );

    MovieScreenElement.find(`.player__exit`).simulate(`click`);
    expect(toggleMovieScreenHandler).toHaveBeenCalledTimes(1);
  });
});
