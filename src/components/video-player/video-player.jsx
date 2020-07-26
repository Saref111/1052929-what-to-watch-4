import React from "react";
import PropTypes from "prop-types";
import withPlayer from "../../hocs/with-player.jsx";

const VideoPlayer = (props) => {
  const {children} = props;
  return (
    <React.Fragment>
      {children}
    </React.Fragment>
  );
};

VideoPlayer.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]).isRequired,
};

export default withPlayer(VideoPlayer);
