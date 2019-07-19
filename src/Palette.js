import React, { Component } from "react";
import ColorBox from "./ColorBox";
import "./Palette.css";
import Navbar from "./Navbar";
import { thisTypeAnnotation } from "@babel/types";
class Palette extends Component {
  state = {
    level: 500,
    format: "hex"
  };
  changeLevel = (newLevel) => {
    this.setState({ level: newLevel });
  };
  changeFormat = (value) => {
    this.setState({ format: value });
  };
  render() {
    const colorBoxes = this.props.palette.colors[this.state.level].map(
      (color) => (
        <ColorBox background={color[this.state.format]} name={color.name} />
      )
    );
    return (
      <div className="Palette">
        <Navbar
          level={this.state.level}
          handleChange={this.changeFormat}
          changeLevel={this.changeLevel}
        />
        <div className="Palette-colors">{colorBoxes}</div>
      </div>
    );
  }
}

export default Palette;
