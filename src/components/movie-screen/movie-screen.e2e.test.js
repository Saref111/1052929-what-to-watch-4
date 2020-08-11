import React from "react";
import {mount} from "enzyme";
import MovieScreen from "./movie-screen.jsx";
import {BrowserRouter} from "react-router-dom";

describe(`e2e tests for MovieScreen`, () => {


  test(`should call handlePlayPause func`, () => {
    const handlePlayPause = jest.fn();

    const MovieScreenElement = mount(
        <BrowserRouter>
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
            match={{
              url: `mencfnfnfnf`,
              params: {
                id: 1,
              }
            }}
          />
        </BrowserRouter>, {
          createNodeMock() {
            return {};
          }
        }
    );

    MovieScreenElement.find(`button.player__play`).simulate(`click`);
    expect(handlePlayPause).toHaveBeenCalledTimes(1);
  });

  test(`should call toggleMovieScreenHandler`, () => {
    const toggleMovieScreenHandler = jest.fn();

    const MovieScreenElement = mount(
        <BrowserRouter>
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
            match={{
              url: `mencfnfnfnf`,
              params: {
                id: 1,
              }
            }}
          />
        </BrowserRouter>, {
          createNodeMock() {
            return {};
          }
        }
    );

    MovieScreenElement.find(`Link.player__exit`).simulate(`click`);
    expect(toggleMovieScreenHandler).toHaveBeenCalledTimes(1);
  });
});
