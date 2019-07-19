import React, { Component } from "react";
import Slider from "rc-slider";
import { Link } from "react-router-dom";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import Snackbar from "@material-ui/core/Snackbar";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";
import "rc-slider/assets/index.css";
import "./Palette.css";

class Navbar extends Component {
  state = {
    format: "hex",
    open: false
  };
  handleChange = (e) => {
    this.setState({ format: e.target.value, open: true }, () => {
      this.props.handleChange(this.state.format);
    });
  };
  closeSnackBar = () => {
    this.setState({ open: false });
  };
  render() {
    return (
      <header className="Navbar">
        <div className="logo">
          <Link to="/">React Color Picker</Link>
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
        <div
          className="select-container"
          style={{ marginLeft: "auto", marginRight: "1rem" }}
        >
          <Select value={this.state.format} onChange={this.handleChange}>
            <MenuItem value="hex">HEX - #ffffff</MenuItem>
            <MenuItem value="rgb">rgb - rgb(255,255,255)</MenuItem>
            <MenuItem value="rgba">rgba - rgba(255,255,255, 1.0)</MenuItem>
          </Select>
        </div>
        <Snackbar
          anchorOrigin={{ vertical: "bottom", horizontal: "left" }}
          open={this.state.open}
          autoHideDuration={1000}
          message={
            <span>Format Changed to {this.state.format.toUpperCase()}</span>
          }
          onClose={this.closeSnackBar}
          action={
            <IconButton color="inherit" onClick={this.closeSnackBar}>
              <CloseIcon />
            </IconButton>
          }
        />
      </header>
    );
  }
}

export default Navbar;
