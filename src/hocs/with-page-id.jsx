import React from "react";

const withPageId = (Component) => {
  class WithPageId extends React.Component {
    constructor(props) {
      super(props);

      this.state = {
        page: 0
      };

      this.handleClick = this.handleClick.bind(this);
    }

    handleClick(id) {
      this.setState(() => {
        return {page: id};
      });
    }

    render() {
      return <Component
        {...this.props}
        page={this.state.page}
        handleClick={this.handleClick}
      />;
    }
  }

  WithPageId.propTypes = {};

  return WithPageId;
};

export default withPageId;
