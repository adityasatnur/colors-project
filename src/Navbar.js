import React, { Component } from "react";
import Slider from "rc-slider";
import "rc-slider/assets/index.css";
import "./Palette.css";

class Navbar extends Component {
  state = {};
  render() {
    return (
      <header className="Navbar">
        <div className="logo">
          <a href="#">React Color Picker</a>
        </div>
        <div className="slider-container">
          <span>level: {this.props.level}</span>
        </div>
        <div className="slider">
          <Slider
            defaultValue={this.props.level}
            min={100}
            max={900}
            step={100}
            onAfterChange={this.props.changeLevel}
          />
        </div>
      </header>
    );
  }
}

export default Navbar;
