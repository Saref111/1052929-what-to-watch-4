import React from "react";
import {mount} from "enzyme";
import VideoPlayer from "./video-player.jsx";

test(`Videoplayer state test`, () => {
  const VideoPlayerComponent = mount(<VideoPlayer
    isMuted={true}
    isPlaying={false}
    poster={`123345`}
    preview={`1234`}
  />);

  const VideoPlayerComponentIsPlaying = mount(<VideoPlayer
    isMuted={true}
    isPlaying={true}
    poster={`123345`}
    preview={`1234`}
  />);

  expect(VideoPlayerComponent.state()).toStrictEqual({
    progress: 0,
    isLoading: true,
    isPlaying: false,
  });
  expect(VideoPlayerComponentIsPlaying.state()).toStrictEqual({
    progress: 0,
    isLoading: true,
    isPlaying: true,
  });
});

