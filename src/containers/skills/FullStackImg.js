import React, { Component } from "react";

export default class FullStackImg extends Component {
  render() {
    const theme = this.props.theme;
    return <img src={require("../../assets/images/webdev.svg")} />;
  }
}
