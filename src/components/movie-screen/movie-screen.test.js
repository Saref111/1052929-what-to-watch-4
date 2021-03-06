import React from 'react';
import renderer from "react-test-renderer";
import MovieScreen from "./movie-screen.jsx";
import {BrowserRouter, Route} from 'react-router-dom';

describe(`MovieScreen snaptests`, () => {
  test(`Snapshot MovieScreen test`, () => {
    const tree = renderer.create(<BrowserRouter><Route render={(props) => {
      return <MovieScreen
        {...props}
        getProgress={() => {}}
        toggleFullScreen={() => {}}
        handlePlayPause={() => {}}
        toggleMovieScreenHandler={() => {}}
        currentPosition={44}
        isFullscreen={false}
        isPlaying={true}
        movieLength={100}
        movieSrc={`111111`}
        poster={`12345`}
      />;
    }}/>
    </BrowserRouter>, {
      createNodeMock: () => {
        return {
          poster: null,
          src: null,
          muted: null,
        };
      }
    }
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });

  test(`Snapshot MovieScreen test fullscreen mode`, () => {
    const tree = renderer.create(<BrowserRouter><Route render={(props) => {
      return <MovieScreen
        {...props}
        getProgress={() => {}}
        toggleFullScreen={() => {}}
        handlePlayPause={() => {}}
        toggleMovieScreenHandler={() => {}}
        currentPosition={44}
        isFullscreen={true}
        isPlaying={true}
        movieLength={100}
        movieSrc={`111111`}
        poster={`12345`}
      />;
    }}/>
    </BrowserRouter>, {
      createNodeMock: () => {
        return {
          oncanplaythrough: null,
          onpause: null,
          onplay: null,
          ontimeupdate: null,
        };
      }
    }
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });
});


