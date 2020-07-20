import React from "react";
import PropTypes from "prop-types";
import withPlayer from "../../hocs/with-player.jsx";

class VideoPlayer extends React.PureComponent {
  render() {
    const {children} = this.props;
    return (
      <React.Fragment>
        {children}
      </React.Fragment>
    );
  }
}

VideoPlayer.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]).isRequired,
};

export default withPlayer(VideoPlayer);
