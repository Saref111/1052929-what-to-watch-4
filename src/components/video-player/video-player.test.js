import React from "react";
import renderer from "react-test-renderer";
import VideoPlayer from "./video-player.jsx";

const cover = `cover`;

test(`Videoplayer snaptest`, () => {
  const tree = renderer.create(<VideoPlayer
    isMuted={true}
    isPlaying={false}
    poster={cover}
    preview={`1234`}
  />, {createNodeMock: () => {
    return {};
  }}).toJSON();

  expect(tree).toMatchSnapshot();
});
