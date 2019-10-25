import React, { Component } from "react";

// Input : boolean 'true/false'

class LikeComponent extends Component {
  render() {
    const { liked, onClick } = this.props;

    let classes = "fa fa-2x fa-heart";

    if (!liked) classes += "-o";

    return (
      <i
        onClick={onClick}
        style={{ cursor: "pointer" }}
        className={classes}
      ></i>
    );
  }
}

export default LikeComponent;
