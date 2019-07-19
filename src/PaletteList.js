import React, { Component } from "react";
import { Link } from "react-router-dom";
class PaletteList extends Component {
  state = {};
  render() {
    return (
      <div>
        <h1>React Colors</h1>
        {this.props.palette.map((pal) => (
          <Link to={`/palette/${pal.id}`}>{pal.paletteName}</Link>
        ))}
      </div>
    );
  }
}

export default PaletteList;
