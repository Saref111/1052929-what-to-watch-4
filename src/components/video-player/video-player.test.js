import React from "react";
import renderer from "react-test-renderer";
import VideoPlayer from "./video-player.jsx";

const cover = `cover`;

test(`Videoplayer snaptest`, () => {
  const tree = renderer.create(<VideoPlayer
    isPlaying={false}
    poster={cover}
    preview={`1234`}
  />, {createNodeMock: () => {
    return {};
  }}).toJSON();

  expect(tree).toMatchSnapshot();
});
